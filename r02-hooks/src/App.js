import {useState} from "react"
import {Zero} from "./components/Zero"
import {First} from "./components/First"
import {Second} from "./components/Second"
import './App.css';

function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="App">
      <button onClick={e => setPage(0)}>0</button>
      <button onClick={e => setPage(1)}>1</button>
      <button onClick={e => setPage(2)}>2</button>
      <div>
      {
      page === 0
      ?
      <Zero />
      :
      page === 1
        ?
        <First />
        :
        <Second />
      }
      </div>
    </div>
  );
}

export default App;
