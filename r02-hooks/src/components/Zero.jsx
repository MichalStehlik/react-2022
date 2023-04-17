import {useEffect, useState} from "react"

export const Zero = ({x}) => {
    console.log("Redraw");
    const [value, setValue] = useState(0);
    const [text, setText] = useState(0);
    useEffect(()=> { // při každém překreslení jednou
        console.log("effect");
    });
    useEffect(()=> { // při připojení komponenty = konstruktor
        console.log("mount");
        return () => {
            console.log("dismount"); // destruktor
        }
    },[]);
    useEffect(()=> { // při změně hodnot = observer
        console.log("change");
    },[value,x]);
    return (
        <>
        <div>Zero</div>
        <button onClick={e => {setValue(value + 1)}}>+</button>
        <div>{value}</div>
        </>
        
    );
}

export default Zero;