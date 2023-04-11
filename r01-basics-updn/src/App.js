import {useState} from "react"
import Veverka from "./components/DisplayNumber"
import {DisplayNumber} from "./components/DisplayNumber"
import {UpDown} from "./components/UpDown"

function App() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  return (
    <div className="App">
      <div>
        <Veverka value="4"/>
      </div>
      <UpDown value={a} setValue={setA} />
      <UpDown value={b} setValue={setB} />
      <UpDown value={b} setValue={setB} />
      <DisplayNumber value={a + b}/>
    </div>
  );
}

export default App;
