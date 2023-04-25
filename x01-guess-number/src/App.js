import {useState, useEffect} from "react"
import './App.css';
import Status from "./components/Status"
import {Input} from "./components/Input"

function App() {
  const [value, setValue] = useState(0);
  const [guess, setGuess] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const Reset = () => {
    setValue(Math.round(Math.random() * 100));
    setAttempts(0);
    setGuess(0);
  }

  useEffect(()=>{
    Reset();
  },[]);

  useEffect(()=>{ // not recommended
    console.log("Changing guess");
  },[guess]);
  
  return (
    <div className="App">
      <Status val={value} guess={guess} />
      <p>{attempts}</p>
      {(value !== guess) 
      ? 
      <Input 
        value={guess} 
        action={(x) => {setGuess(x); setAttempts(prev => prev + 1)}} 
      />
      :
      <button onClick={e => {Reset()}}>Reset</button>
      }
    </div>
  );
}

export default App;
