
import './App.css';
import CardsLayout from './CardsLayout';
import { countries } from './countries';

function App() {
  console.log(countries)
  return (
    <div className="App" >
    <CardsLayout countries={countries}/>
    </div>
  );
}

export default App;
