import { renderHook } from '@testing-library/react-hooks';
import { useFetchData } from '../useFetchData';

// Mocking fetch API
const mockFetch = (data: any) => jest.fn().mockResolvedValue({ json: () => data });

describe('useFetchData', () => {
  beforeEach(() => {
    global.fetch = mockFetch([{ dbn: '123', school_name: 'School A' }]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch data and set isFetching to true while fetching', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchData());
    
    expect(result.current.isFetching).toBe(true);
    await waitForNextUpdate();
    expect(result.current.isFetching).toBe(false);
    expect(result.current.data).toEqual([{ dbn: '123', school_name: 'School A' }]);
  });

  it('should set isFetching to false when fetching fails', async () => {
    // Mocking fetch to reject the promise
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Failed to fetch'));
    const { result, waitForNextUpdate } = renderHook(() => useFetchData());
    
    expect(result.current.isFetching).toBe(true);
    await waitForNextUpdate();
    expect(result.current.isFetching).toBe(false);
    expect(result.current.data).toEqual([]);
  });
});
