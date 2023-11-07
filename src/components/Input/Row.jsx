import styles from "./Row.module.css";
import React, { forwardRef } from "react";

export const Row = forwardRef((props, ref) => {
    const rowClasses = props.isFocused ? `${styles.row} + ' ' + ${styles.focusedRow}` : styles.row;

    return (
        <div className={rowClasses}>
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