import { useMainStore } from "../../store"
import "./styles/school-list-container.css"



export default function SchoolViewer():JSX.Element{
    /**
     * Data hooks
     */

    const listOfSchools = useMainStore(state=>state.listOfSchools)
    const selectedSchoolDbnId = useMainStore(state=>state.selectedSchoolDbnId)

    const selectedSchool = listOfSchools?.find((item:any)=>item.dbn === selectedSchoolDbnId)


    return <div data-testid= 'school-list-viewer' className="school-list-viewer">
        <h1>School Detail Viewer</h1>
        <div data-testid = 'school-viewer-box'> {selectedSchool?.overview_paragraph || "Please Select School to view the details"}</div>
        </div>
}