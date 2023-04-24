export const Second = ({fsize = 30}) => {
    let mySpecialStyle = {
        color: "blue", 
        backgroundColor: "yellow",
        fontSize: fsize
    };
    return(
        <div style={mySpecialStyle}>Second</div>
    );
}

export default Second;