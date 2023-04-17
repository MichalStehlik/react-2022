import {useState} from "react"
export const First = () => {
    const [text, setText] = useState("abcdef");
    return (
        <>
        <div>First</div>
        <input value={text} onChange={e => setText(e.target.value)} />
        <p>{text}</p>
        </>
    );
}

export default First;