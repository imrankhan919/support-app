import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminService from "./adminService";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: "",
    users: [],
    tickets: [],
    ticket: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "";
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export default adminSlice.reducer;

// GET ALL USERS
export const getAllUsers = createAsyncThunk(
  "ADMIN/USERS",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    try {
      return await adminService.getUsers(token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
