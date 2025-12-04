import { createSlice } from "@reduxjs/toolkit";

interface VariableState {
  domainName: string;
  showSearchBar: boolean;
}

const initialState: VariableState = {
  domainName: "algoTate.",
  showSearchBar: false
};

const variableSlice = createSlice({
  name: "variable",
  initialState,
  reducers: {
    toggleSearchBar: (state) => {
      state.showSearchBar = !state.showSearchBar;
    },
    showSearchBar: (state) => {
      state.showSearchBar = true;
    },
    hideSearchBar: (state) => {
      state.showSearchBar = false;
    },
    setDomainName: (state, action) => {
      state.domainName = action.payload;
    }
  },
});

export const { toggleSearchBar, showSearchBar, hideSearchBar, setDomainName } = variableSlice.actions;
export default variableSlice.reducer;