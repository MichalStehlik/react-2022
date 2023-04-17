import {useState, useRef} from "react"
export const Second = () => {
    const [text, setText] = useState("abcdef");
    const inp = useRef();
    return (
        <>
        <div>First</div>
        <input ref={inp} />
        <button onClick={e => {setText(inp.current.value)}}>go</button>
        <p>{text}</p>
        </>
    );
}

export default Second;