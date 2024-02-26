
import { create } from 'zustand';
import { createSchoolListSlice,ICreateSchoolListSlice } from './slices/createSchoolListSlice';
import { createSearchSlice,ICreateSearchSlice } from './slices/createSearchSlice';


export const useMainStore =  create<ICreateSchoolListSlice & ICreateSearchSlice>()((...a) => ({
    ...createSchoolListSlice(...a),
    ...createSearchSlice(...a)
}))