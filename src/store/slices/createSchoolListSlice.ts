import { StateCreator } from "zustand";
import { SchoolRecrod } from "../../api/hooks/useFetchData";

export interface ICreateSchoolListSlice {
  listOfSchools: Partial<SchoolRecrod>[]
  setListOfSchools: (listOfSchools: any) => void;
  isFetchingSchoolRecords: boolean;
  setIsFetchingSchoolRecords: (isFetchingSchoolRecords: boolean) => void;
  setSelectedSchoolDbnId: (dbnId: string) => void;
  selectedSchoolDbnId: string;
}

export const createSchoolListSlice: StateCreator<ICreateSchoolListSlice> = (
  set: any
) => ({
  selectedSchoolDbnId: "",
  setSelectedSchoolDbnId: (selectedSchoolDbnId) => set({ selectedSchoolDbnId }),
  isFetchingSchoolRecords: false,
  setIsFetchingSchoolRecords: (isFetchingSchoolRecords) =>
    set({ isFetchingSchoolRecords }),
  listOfSchools: [],
  setListOfSchools: (listOfSchools: any) => set({ listOfSchools }),
});
