import { createSlice } from "@reduxjs/toolkit";

// Default value for the state
const initialValue = {
  level: "",
  languages: [],
  tools: [],
  role: "",
};

// Slice function for conditions
const conditionSlice = createSlice({
  name: "conditions",
  initialState: initialValue,
    // Reducer functions for this slice   
  reducers: {
    removeAllConditions: (state) => {
      return initialValue;
    },

    addLevel: (state, action) => {
      return { ...state, level: action.payload };
    },
    addRole: (state, action) => {
      return { ...state, role: action.payload };
    },
    addTools: (state, action) => {
      return {
        ...state,
        tools: state.tools
          .concat(action.payload)
          .filter((v, i, a) => a.indexOf(v) === i),
      };
    },
    addLanguages: (state, action) => {
      return {
        ...state,
        languages: state.languages
          .concat(action.payload)
          .filter((v, i, a) => a.indexOf(v) === i),
      };
    },
    removeLanguages: (state, action) => {
      if (state.languages.length > 1) {
        return {
          ...state,
          languages: state.languages.filter((_e, i) => i !== action.payload),
        };
      } else {
        return {
          ...state,
          languages: []
        };
      }
    },
    removeTools: (state, action) => {
      if (state.tools.length > 1) {
        return {
          ...state,
          tools: state.tools.filter((_e, i) => i !== action.payload),
        };
      } else {
        return {
          ...state,
          tools: [],
        };
      }
    },
    removeLevel: (state) => {
      return { ...state, level: "" };
    },
    removeRole: (state) => {
      return { ...state, role: "" };
    },
  },
});

// Export default reducer and const reducer functions
export default conditionSlice.reducer;
export const {
  addRole,
  addLevel,
  addLanguages,
  addTools,
  removeRole,
  removeLevel,
  removeTools,
  removeLanguages,
  removeAllConditions,
} = conditionSlice.actions;
