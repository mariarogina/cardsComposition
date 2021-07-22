
import './App.css'; 
import CardsLayout from './Components/CardsLayout';
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
