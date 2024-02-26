import { Key } from "react";
import SchoolRecord from "../Elements/SchoolRecord";
import { SchoolListHeader } from "../Blocks/SchoolListHeader/SchoolListHeader";
import "./styles/school-list-container.css";
import { useMainStore } from "../../store";

export default function SchoolListContainer(): JSX.Element {

    /**
     * Data hooks
     */
  const schoolRecords = useMainStore((state) => state.listOfSchools);


  return (
    <div className="school-list-container" data-testid="school-list-container">
      <SchoolListHeader />

      {schoolRecords?.map((school: any, key: Key) => {
        return (
          <SchoolRecord
            school_name={school.school_name as string}
            dbn={school.dbn}
            key={key}
          />
        );
      })}
    </div>
  );
}
