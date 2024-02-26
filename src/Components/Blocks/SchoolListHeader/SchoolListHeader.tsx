import {Search} from "../SearchBox/SearchBox";
import "./styles.css";

export const SchoolListHeader = (): JSX.Element => {
  return (
    <div
      data-testid="school-list-header-main"
      className="school-list-header-main"
    >
      <h1 className="school-list-container-title">School list</h1>

      <div className="school-list-header">
        <div className="header-fields">
          <div id="dbn-header">DBN id</div>
          <div id="school-name-header">School Name</div>
        </div>
        <div className="search-box-container">
          <Search />
        </div>
      </div>
    </div>
  );
};
