import { useMainStore } from "../../../store";
import "./styles.css";

export const Search: React.FC = () => {
  /**
   * data hooks
   */

  const searchQuery = useMainStore((state) => state.searchedQuery);
  const setSearchQuery = useMainStore((state) => state.setSearchedQuery);
  const listOfSchools = useMainStore((state) => state.listOfSchools);
  const setListOfSchools = useMainStore((state) => state.setListOfSchools);


  const handleChange = (event: { target: { value: string } }) => {
    setSearchQuery(event.target.value);
     // Reset the list of schools to the original full list if the search query is empty
  if (searchQuery.trim() === '') {
    setListOfSchools(listOfSchools);
    return;
  }
    const filteredResults = listOfSchools.filter((schools) => {
      const nameSearched =  schools.school_name
        ?.toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase());

      const dbnSearched = schools.dbn
      ?.toLocaleLowerCase()
      .includes(searchQuery.toLocaleLowerCase());
      return dbnSearched || nameSearched
    });
    setListOfSchools(filteredResults)
  };



  return (
    <div data-testid="search-box" className="search-box">
      <input
        data-testid="search-box-input"
        type="text"
        placeholder="Search school..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};
