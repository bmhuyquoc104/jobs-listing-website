import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: [],
  reducers: {
    addJob: (state, action) => {
      return state
        .concat(action.payload)
        .filter((v, i, a) => a.indexOf(v) === i);
    },
    deleteJob: (state, action) => {
      return state.filter((_e, index) => {
        return index !== action.payload;
      });
    },
    clearJob: () => {
      return [];
    },
  },
});

export const { addJob, deleteJob, clearJob } = jobsSlice.actions;

export default jobsSlice.reducer;
