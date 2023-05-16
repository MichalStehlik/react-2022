import {useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

export const List = () => {
    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(()=> {
        setLoading(true);
        setError(false);
        axios.get("https://www.pslib.cz/tomas.kazda/api/kurzycnbapi.php")
        .then(response => {
            console.log(response);
            setCollection(response.data.items);
        })
        .catch(err => {
            setError(true);
            setCollection([]);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[]);
    if (loading) return <p>Loading</p>;
    if (error) return <p>{"ERROR:" + error}</p>;
    if (collection) {
        return (
            <>
            <div>
                {collection.map(
                    (item, index) => (
                        <span key={index}><Link to={"/" + item.kod}>{item.kod}</Link> </span>
                    ))}
            </div>
            <div>
                <Link to="/detail/15.05.2023">15.5.2023</Link>{" "}
                <Link to="/detail/12.05.2023">12.5.2023</Link>{" "}
                <Link to="/detail/10.05.2023">10.5.2023</Link>
            </div>
            </>
        );
    }
    return <p>Inicialize</p>
}

export default List;