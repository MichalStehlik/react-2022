import {useParams} from "react-router-dom"

export const Detail = ({data}) => {
    let {id} = useParams();
    if (id < data.length) {
        let item = data[id];
        return(
            <dl>
                <dt>ID</dt>
                <dd>{id}</dd>
                <dt>Firstname</dt>
                <dd>{item.firstname}</dd>
                <dt>Lastname</dt>
                <dd>{item.lastname}</dd>
            </dl>
        );
    }
    return (<p>Out of range</p>);
}

export default Detail;