import { useState, useEffect, useCallback } from "react";
import { schoolURL } from "../constant";

export interface SchoolRecrod {
  dbn: string;
  school_name: string;
  boro: string;
  overview_paragraph: string;
  school_10th_seats: string;
  academicopportunities1: string;
  academicopportunities2: string;
  ell_programs: string;
  neighborhood: string;
  building_code: string;
  location: string;
  phone_number: string;
  fax_number: string;
  school_email: string;
  total_students:string;
  extracurricular_activities:string,
  city:string;
  zip:string
}


export const useFetchData = ():{data:Partial<SchoolRecrod>[],isFetching:boolean} => {

  const [data, setData] = useState<SchoolRecrod[]>([])
  const [isFetching,setIsFetching] = useState<boolean>(false)



  const schoolResponse = useCallback(async () => {
    try {
      setIsFetching(true)
      const result = await fetch(schoolURL);
      const data = await result.json();
      return setData(data)
      
    } catch (e) {
      setIsFetching(false)
      console.error('error fetching data, please check more details here:',e)
    } finally {
      setIsFetching(false)
    }
  }, []);

  useEffect(() => {
    schoolResponse().then()
  }, [schoolResponse]);


  return {data  ,isFetching}
};
