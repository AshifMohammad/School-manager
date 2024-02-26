
import { useMainStore } from "../../store"
import "./styles/styles.css"

interface ISchoolRecord {
    school_name: string,
    dbn: string,
}

export default function SchoolRecord({ school_name, dbn }: ISchoolRecord): JSX.Element {
    /**
     * Data hooks
     */

    const setSelectedSchool = useMainStore(state=>state.setSelectedSchoolDbnId)
    

    const handleClick = (e:any) => setSelectedSchool(dbn)
        
    return <div className="school-record" id={dbn} onClick={handleClick}>
        <div className="school-record-dbn" id='school_name'>{dbn}</div>
        <div className="school-record-name" id ='dbn_name'>{school_name}</div>
    </div>
}