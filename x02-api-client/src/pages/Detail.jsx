import {useState, useEffect} from "react"
import axios from "axios"
import {Link, useParams} from "react-router-dom"

export const Detail = () => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(()=> {
        setLoading(true);
        setError(false);
        axios.get("https://www.pslib.cz/tomas.kazda/api/kurzycnbapi.php?date=" + id)
        .then(response => {
            console.log(response);
            setData(response.data);
        })
        .catch(err => {
            setError(true);
            setData(null);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[id]);
    if (loading) return <p>Loading</p>;
    if (error) return <p>{"ERROR:" + error}</p>;
    if (data) {
        return (
            <>
            <pre>{JSON.stringify(data.items)}</pre>
            <table>
                <tbody>
                    {data.items.map((item,index) => (
                        <tr key={index}>
                            <td>{item.zeme}</td>
                            <td>{item.mena}</td>
                            <td>{item.kod}</td>
                            <td>{item.mnozství}</td>
                            <td>{item.kurz}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
        );
    }
    return <p>Inicialize</p>
}

export default Detail;