import styles from "./InputContainer.module.css";
import { Row } from "./Row.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { inputActions } from "../../store/input-slice";

export const InputContainer = () => {
  const rows = useSelector((state) => state.input.rows);
  const focusedRow = rows.find((row) => row.isFocused);
  const focusedInputRef = useRef(null);
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    console.log(event.target.value);
    if (event.key === "Enter") {
      dispatch(inputActions.enter(event.code));
    } 
    else if (event.key === 'Backspace' && focusedRow.rowContent === '' && focusedRow.rowNumber !== 0) {
      console.log(focusedRow.rowContent);
      dispatch(inputActions.deleteRow());
    }
    console.log('Change Handler',);
    dispatch(inputActions.type(event.target.value));
  };

  useEffect(() => {
    focusedInputRef.current.focus();
  }, [focusedRow]);

  return (
    <div className={styles.inputContainer}>
      {rows.map((row) => (
        <Row
          rowNumber={row.rowNumber}
          rowContent={row.rowContent}
          onChange={(ev) => changeHandler(ev)}
          key={row.key}
          placeholder={row.placeholder}
          ref={row.isFocused ? focusedInputRef : null}
          isFocused={row.isFocused}
        />
      ))}
    </div>
  );
};
