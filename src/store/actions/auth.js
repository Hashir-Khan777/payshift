import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async (loginForm, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        loginForm
      );
      localStorage.setItem("user", data.token);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (registerForm, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        registerForm
      );
      localStorage.setItem("user", data.token);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (emailVerificationForm, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify/email`,
        emailVerificationForm.data,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (emailVerificationForm?.resetPass) {
        localStorage.setItem("token", data.token);
        return {};
      } else {
        localStorage.removeItem("token");
        localStorage.setItem("user", data.token);
        return data;
      }
    } catch (err) {
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

export const verifyUser = createAsyncThunk(
  "auth/verifyUser",
  async (obj, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify/user`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("user")}` },
        }
      );
      return data;
    } catch (err) {
      dispatch(logout());
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (forgotPasswordForm, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot/password`,
        forgotPasswordForm
      );
      localStorage.setItem("token", data.token);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (resetPasswordForm, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset/password`,
        resetPasswordForm,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      localStorage.removeItem("token");
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

export const logout = createAsyncThunk("auth/logout", () => {
  localStorage.clear();
  return {};
});
