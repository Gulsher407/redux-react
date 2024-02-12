import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userslice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      return [...state, action.payload];
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      if (id) {
        return state.filter(user => user.id !== id);
      }
      return state;
    },
    editUser: (state, action) => {
      const { id, newName, newEmail } = action.payload;
      // Create a new array with the updated user
      return state.map(user =>
        user.id === id ? { ...user, name: newName, email: newEmail } : user
      );
    }
  },
});


export const { addUser, deleteUser, editUser } = userslice.actions;
export default userslice.reducer;
