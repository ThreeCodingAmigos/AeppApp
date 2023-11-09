import styles from "./Row.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { inputActions } from "../../store/input-slice";

export const Row = (props) => {
  const rows = useSelector((state) => state.input.rows);
  const focusedRow = rows.find((row) => row.isFocused);
  const dispatch = useDispatch();
  const focusedInputRef = useRef(null);

  const rowClasses = props.isFocused
    ? `${styles.row} + ' ' + ${styles.focusedRow}`
    : styles.row
  ;

  const clickHandler = (event) => {
    dispatch(inputActions.clickToChangeRow());
  }
  const changeHandler = (event) => {
    if (event.key === "Enter") {
      dispatch(inputActions.enter(event.code));
      console.log('Enter');
    } else if (event.key === "Backspace") {
      if (focusedRow.rowContent === '' && focusedRow.rowNumber !== 0) {
        event.preventDefault(); //For not removing the last character, when moving to the previous line
        dispatch(inputActions.deleteRow(focusedRow.rowNumber));
        console.log('Delete Row');
      }
      if (focusedRow.rowContent !== '') {
        console.log('Backspace');
        const newContent = Array.from(event.target.value);
        newContent.pop();
        console.log(newContent);
        dispatch(inputActions.backspace(newContent.toString()));
      }
    } else {
      dispatch(inputActions.type(event.key));
    }
  };

  useEffect(() => {
    focusedInputRef.current.focus();
  }, [focusedRow]);

  return (
    <div className={rowClasses}>
      <p>{props.rowNumber}</p>
      <input
        type="text"
        onKeyDown={changeHandler}
        placeholder={props.placeholder}
        ref={focusedInputRef}
      />
    </div>
  );
};
