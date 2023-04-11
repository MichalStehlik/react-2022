// import {useState} from "react"
import {DisplayNumber} from "./DisplayNumber"

export const UpDown = ({value, setValue}) => {
    //const [value, setValue] = useState(1);
    //let a = 8;
    return (
        <>
            <button onClick={e => {setValue(prev => prev - 1)}}>-</button>
            <DisplayNumber value={value}/>
            <button onClick={e => {setValue(value + 1)}}>+</button>
            <button onClick={e => {setValue(prev => prev + 1)}}>+</button>
        </>
    );  
}

export default UpDown;