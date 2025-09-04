import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Auth from "../../interfaces/Auth";

interface AuthState {
  status: "checking" | "authenticated" | "not-authenticated";
  user: Auth;
  errorMessage?: string;
}

const initialState: AuthState = {
  status: "checking", // estado inicial
  user: {
    name: "",
    lastName: "",
    squadId: 0,
    squadName: "",
    positionId: 0,
    positionName: "",
  },
  errorMessage: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.errorMessage = undefined;
    },

    onLogin: (state) => {
      state.status = "authenticated";
      state.errorMessage = undefined;
    },

    onLogout: (state, action: PayloadAction<string | undefined>) => {
      state.status = "not-authenticated";
      state.errorMessage = action.payload;
    },

    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSlice.actions;

export default authSlice.reducer;
