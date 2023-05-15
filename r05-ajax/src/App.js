import './App.css';
import {useState, useEffect, useCallback} from "react" 
import axios from "axios"

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(false);
  useEffect(()=>{
    setProgress(true);
    setError(false);
    axios("http://numbersapi.com/random/trivia")
    .then(response => {setData(response.data); console.log(response);})
    .catch(err => {
      setData([]); 
      setError(err); 
      console.error(err);
    })
    .finally(()=>{setProgress(false)})
  },[]);
  if (progress) return <p>Nahráváme data</p>;
  if (error) return <p>Došlo k chybě</p>
  if (data) return(
    <pre>
      {JSON.stringify(data," ",4)}
    </pre>
  );
  return (
    <p>Data nejsou k dispozici.</p>
  );
}

export default App;
