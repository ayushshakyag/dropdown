import './App.css';
import Dropdown from './dropdown';

const dropdownItems = ['Yes', 'No', 'Probably not'];

function App() {
  return (
    <div className="App">
      <h2>Should you use dropdown?</h2>
      <Dropdown items={dropdownItems} />
    </div>
  );
}

export default App;
