import { useMainStore } from '../../../store';
import './styles.css'; // Import CSS file for styling

export const SchoolDetail = ():JSX.Element => {

/**
 * Data hooks
 */

 const selectedSchoolId = useMainStore(state=>state.selectedSchoolDbnId)
 const listOfSchools = useMainStore(state=>state.listOfSchools)

 const selectedSchool = listOfSchools?.find(school=>school.dbn === selectedSchoolId)



  return (
    <div className="record-container">
      <table className="record-table">
        <tbody>
          <tr>
            <td>Total Students</td>
            <td>{selectedSchool?.total_students}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>{selectedSchool?.location}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{selectedSchool?.city}</td>
          </tr>
          <tr>
            <td>ZIP</td>
            <td>{selectedSchool?.zip}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>{selectedSchool?.phone_number}</td>
          </tr>
          <tr>
            <td>Extracurricular Activities</td>
            <td>{selectedSchool?.extracurricular_activities}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

