import { Link } from "react-router-dom"

export const Home = ({data, removeAction}) => {
    return(
        <table>
            <tbody>
            {data.map((item,index) => (
                <tr key={index}>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td><Link to={"/" + index}>Detail</Link></td>
                    <td><button onClick={e => {removeAction(index)}}>Remove</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Home;