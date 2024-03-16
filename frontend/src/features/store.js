import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import adminReducer from "./admin/adminSlice";
import ticketReducer from "./ticket/ticketSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    ticket: ticketReducer,
  },
});

export default store;
