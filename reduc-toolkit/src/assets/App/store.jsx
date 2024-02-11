import { configureStore } from "@reduxjs/toolkit";
import  userDetail  from "../features/Userdetails";

export const store = configureStore({
  reducer: {
    app : userDetail,
  },
});