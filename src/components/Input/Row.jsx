import styles from "./Row.module.css";
import React, { forwardRef } from "react";

export const Row = forwardRef((props, ref) => {
    return (
        <div className={styles.row}>
            <p>{props.rowNumber}</p>
            <input
                type="text"
                onKeyDown={props.onChange}
                placeholder={props.placeholder}
                ref={ref}
            />
        </div>
    );
});