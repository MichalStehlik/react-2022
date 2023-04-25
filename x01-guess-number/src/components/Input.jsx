import {useState} from "react"

export const Input = ({value, action}) => {
    const [number, setNumber] = useState(value);
    return(
        <div>
            <input 
              type="number" 
              value={number} 
              onChange={e => setNumber(e.target.value)}/>
            <button onClick={e => action(Number(number))}>Guess</button>
        </div>
    );
}

export default Input;