import styles from "./Row.module.css";
import React from "react";

export const Row = (props) => {
    return (
        <div className={styles.row}>
            <p>{props.rowNumber}</p>
            <input type="text" onChange={props.onChange} onKeyDown={props.onKeyDown}/>
        </div>
    );
}