import styles from './InputContainer.module.css';
import React, {useEffect, useState} from 'react';
import {Row} from "./Row.jsx";

export const InputContainer = () => {
    //States
    const [rows, setRows] = useState([
        {
            rowNumber: 0,
            rowContent: ''
        },
    ]);

    const changeHandler = (event, rowNumber) => {
        const updatedRows = [...rows];
        updatedRows[rowNumber].rowContent = event.target.value;
        setRows(updatedRows);
    }

    const enterHandler = (event, rowNumber) => {
        if (event.key === 'Enter') {
            setRows((prevState) => [
                ...prevState,
                {
                    rowNumber: rowNumber + 1,
                    rowContent: ''
                },
            ]);
        }
    }

    return (
        <div className={styles.inputContainer}>
            {rows.map((row, index) => (
                <Row
                    rowNumber={row.rowNumber}
                    onChange={(event) => changeHandler(event, index)}
                    onKeyDown={(event) => enterHandler(event, index)}
                    key={row.rowNumber}
                />
            ))}
        </div>
    );
}