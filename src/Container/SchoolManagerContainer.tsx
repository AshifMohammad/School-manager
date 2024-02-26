import SchoolListContainer from "../Components/Molecules/SchoolListContainer"
import SchoolViewer from "../Components/Molecules/SchoolViewer"
import { useFetchData } from "../api/hooks/useFetchData"
import "./styles/school-list-maincontainer.css"
import { useMainStore } from "../store"




export default function SchoolManagerConatiner(): JSX.Element {

    /**
     * Data hooks
     */
    const setListOfSchools = useMainStore(state=>state.setListOfSchools)
    
    const setIsFetchingListOfSchool = useMainStore(state=>state.setIsFetchingSchoolRecords)

    const {data,isFetching} = useFetchData()


    setListOfSchools(data)
    setIsFetchingListOfSchool(isFetching)


    return <div data-testid='school-main-container' className="school-list-manager-container">
        <SchoolListContainer  />
        <SchoolViewer  />
    </div>
}