import styles from "./Row.module.css";
import React from "react";

export const Row = (props) => {
    return (
        <div className={styles.row}>
            <p>{props.rowNumber}</p>
            <input
                type="text"
                onKeyDown={props.onEnter}
                placeholder={props.placeholder}
            />
        </div>
    );
}