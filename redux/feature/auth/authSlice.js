import { createSlice, current } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logIn: (state, action) => {
			const authData = JSON.stringify(current(state.auth));
			localStorage.setItem("auth", authData);
			return {
				...state,
				isLoggedIn: true,
			};
		},

		logOut: (state, action) => {
			return {
				...state,
				isLoggedIn: false,
			};
		},
	},
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
