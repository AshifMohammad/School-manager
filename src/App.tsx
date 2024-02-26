import './App.css';
import SchoolManagerConatiner from './Container/SchoolManagerContainer';
import { SchoolICon } from './Components/Blocks/icons/iconsComponents/SchoolIcon';

function App() {
  return (
    <div >
      <header className="App-header">
        <SchoolICon/>
        <div data-testid='header-title'>
        School Management System
          </div>
      </header>
      <>
      <SchoolManagerConatiner/>
      </>
    </div>
  );
}

export default App;
