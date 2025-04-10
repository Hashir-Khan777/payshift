import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import * as Auth from "../actions/auth";

const initialState = {
  loading: false,
  data: {},
  user: {},
  token: "",
  success: false,
};

export default createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(Auth.forgotPassword.fulfilled, (state, { payload }) => {
      state.token = payload.token;
    });
    builder.addCase(Auth.resetPassword.fulfilled, (state, { payload }) => {
      state.success = true;
    });
    builder.addMatcher(
      isAnyOf(Auth.verifyUser.fulfilled, Auth.logout.fulfilled),
      (state, { payload }) => {
        state.data = payload;
        state.loading = false;
      }
    );
    builder.addMatcher(
      isAnyOf(Auth.login.fulfilled, Auth.verifyEmail.fulfilled),
      (state, { payload }) => {
        state.data = payload;
        state.loading = false;
      }
    );
    builder.addMatcher(
      isAnyOf(
        Auth.login.pending,
        Auth.register.pending,
        Auth.verifyEmail.pending,
        Auth.forgotPassword.pending,
        Auth.resetPassword.pending,
        Auth.verifyUser.pending
      ),
      (state) => {
        state.loading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(
        Auth.login.rejected,
        Auth.register.fulfilled,
        Auth.register.rejected,
        Auth.verifyEmail.rejected,
        Auth.forgotPassword.rejected,
        Auth.resetPassword.rejected
      ),
      (state) => {
        state.loading = false;
      }
    );
  },
}).reducer;
