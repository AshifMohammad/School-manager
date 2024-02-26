import { mockedListOfSchools } from "../../utilitis/mockData/mockListOfSchools";
import SchoolManagerContainer from "../SchoolManagerContainer";
import {render,screen ,cleanup} from '@testing-library/react'
import * as hooks from "../../api/hooks/useFetchData"



jest.mock('../../api/hooks/useFetchData')

describe('<SchoolManagerContainer/> Test: Whether or not the container contains the <SchoolListContainer/> and <SchoolViewer/>',()=>{

    const useFetchDataMock = hooks.useFetchData as jest.Mock;

    beforeEach(()=>{
        useFetchDataMock.mockReturnValue({data:mockedListOfSchools,isFetching:false})
    })

    beforeEach(()=>{
        render(<SchoolManagerContainer />)
    })

    afterEach(cleanup)


    // Verify the building blocks are available 
    test('Verify whether main <SchoolManagerContainer/> loaded without error',()=>{
        expect(screen.getByTestId('school-main-container')).toBeVisible()
    })
    test('Verify whether or not the <SchoolListContainer/> is available',()=>{
        expect(screen.getByTestId('school-list-container')).toBeVisible()
    })

    test('Verify whether or not the <SchoolListViewer/> is available',()=>{
        expect(screen.getByTestId('school-list-viewer')).toBeVisible()
    })

    test('Verify whether or not the <SchoolViewer/> is available',()=>{
        expect(screen.getByTestId('school-viewer-box')).toBeVisible()
    })

    
    test('Verify whether <SchoolViewer/> displays the Placeholder message by default on first render - Please select school from the list',()=>{
      expect(screen.getByText('Please Select School to view the details')).toBeVisible()

    })

})