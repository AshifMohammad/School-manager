import { StateCreator } from "zustand";

export interface ICreateSearchSlice {
  searchedQuery: string;
  setSearchedQuery: (searchedQuery:string) => void
}

export const createSearchSlice: StateCreator<ICreateSearchSlice> = (
  set: any
) => ({
    searchedQuery: "",
  setSearchedQuery: (searchedQuery) => set({searchedQuery})
});
