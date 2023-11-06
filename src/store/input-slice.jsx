import { createSlice } from "@reduxjs/toolkit";

// Holds the whole input state
export const inputSlice = createSlice({
  name: "input",
  initialState: {
    rows: [
      {
        rowNumber: 0,
        rowContent: "",
        placeholder: "Write code",
        key: 0,
        isFocused: true,
      },
    ],
  },
  reducers: {
    enter(state, action) {
      if (state.rows.length === 1) {
        state.rows[0].placeholder = "";
        state.rows[0].isFocused = false;
        state.rows.push({
          rowNumber: 1,
          rowContent: "",
          placeholder: "",
          key: 1,
          isFocused: true,
        });
      } else {
        const newRowNumber = state.rows[state.rows.length - 1].rowNumber + 1;
        state.rows[state.rows.length - 1].isFocused = false;
        const newRow = {
          rowNumber: newRowNumber,
          rowContent: "",
          placeholder: "",
          key: newRowNumber,
          isFocused: true,
        };
        state.rows.push(newRow);
      }
    },
    type(state, action) {
      const activeRow = state.rows.find((row) => row.isFocused);
      activeRow.rowContent = activeRow.rowContent + action.payload;
    }
  },
});

export const inputActions = inputSlice.actions;
