import styles from "./InputContainer.module.css";
import { Row } from "./Row.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { inputActions } from "../../store/input-slice";

export const InputContainer = () => {
  const rows = useSelector((state) => state.input.rows);
  const focusedRow = rows.find((row) => row.isFocused);
  const focusedInputRef = useRef(null);
  const dispatch = useDispatch();

  const enterHandler = (event) => {
    event.preventDefault();
    const code = event.code;
    console.log(rows);
    dispatch(inputActions.enter(code));
  };

  useEffect(() => {
    console.log(focusedInputRef);
    focusedInputRef.current.focus();
  }, [focusedRow]);

  return (
    <div className={styles.inputContainer}>
      {rows.map((row) => (
        <Row
          rowNumber={row.rowNumber}
          onEnter={enterHandler}
          key={row.key}
          placeholder={row.placeholder}
          ref={row.isFocused ? focusedInputRef : null}
        />
      ))}
    </div>
  );
};
