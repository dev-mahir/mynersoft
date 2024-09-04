import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		getJsData: (state, action) => {
			return state;
		},
	},
});

export const { getJsData } = userSlice.actions;

export default userSlice.reducer;
