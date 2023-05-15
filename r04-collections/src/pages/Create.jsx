import {useRef} from "react"
import { useNavigate } from "react-router-dom"

export const Create = ({createAction}) => {
    let fn = useRef();
    let ln = useRef();
    let navigate = useNavigate();
    return(
        <form onSubmit={(e) => 
            {
                e.preventDefault();
                console.log(e);
                console.log(fn.current.value);
                createAction(fn.current.value, ln.current.value);
                navigate("/");
            }}>
            <input name="firstname" ref={fn} />
            <input name="lastname" ref={ln} />
            <button type="submit">Uložit</button>
        </form>
    );
}

export default Create;