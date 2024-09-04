import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/user/userSlice";
import authSlice from "./feature/auth/authSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		auth: authSlice,
	},
});
