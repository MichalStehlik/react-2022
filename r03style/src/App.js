import './App.css';
import {First} from "./components/First"
import {Second} from "./components/Second"
import {Third} from "./components/Third"

function App() {
  return (
    <div className="App">
      <First/>
      <Second/>
      <Third/>
      <Second fsize={100}/>
    </div>
  );
}

export default App;
