import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

export const NotesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addedNote: (state, action) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action) => {
      state.notes.pop(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addedNote, removeNote } = NotesSlice.actions;

export default NotesSlice.reducer;
