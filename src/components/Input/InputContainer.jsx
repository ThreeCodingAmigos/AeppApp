import styles from "./InputContainer.module.css";
import { Row } from "./Row.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { inputActions } from "../../store/input-slice";

export const InputContainer = () => {
  const rows = useSelector((state) => state.input.rows);

  return (
    <div className={styles.inputContainer}>
      {rows.map((row) => (
        <Row
          rowNumber={row.rowNumber}
          rowContent={row.rowContent}
          key={row.key}
          placeholder={row.placeholder}
          isFocused={row.isFocused}
        />
      ))}
    </div>
  );
};
