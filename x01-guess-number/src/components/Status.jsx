import styles from "./Status.module.css"

export const Status = ({val, guess}) => {
    console.log(val, guess);
    if (val === guess)
        return(<p className={styles.success}>Ok</p>);
    if (val < guess)
        return(<p className={styles.lower}>Lower</p>);  
    return(
        <p className={styles.higher}>Higher</p>
    );
}

export default Status;