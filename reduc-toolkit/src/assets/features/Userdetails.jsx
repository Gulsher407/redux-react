import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch users
export const showUsers = createAsyncThunk("showUsers", async () => {
  try {
    const response = await fetch("https://65c8be66a4fbc162e112203e.mockapi.io/redux");
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
});

// Async thunk to create a user
export const createUser = createAsyncThunk("createUser", async (data) => {
  try {
    const response = await fetch("https://65c8be66a4fbc162e112203e.mockapi.io/redux", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    return await response.json();
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
});

// Async thunk to update a user
export const updateUser = createAsyncThunk("updateUser", async (data) => {
  try {
    const response = await fetch(`https://641dd63d945125fff3d75742.mockapi.io/crud/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
});

// Async thunk to delete a user
export const deleteUser = createAsyncThunk("deleteUser", async (userId) => {
  try {
    const response = await fetch(`https://65c8be66a4fbc162e112203e.mockapi.io/redux/${userId}`, {
      method: "DELETE"
    });

    return await response.json();
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
});

// Define the userDetail slice
export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {

    // Reducer to update users data
    showUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handling pending, fulfilled, and rejected actions for createUser
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handling pending, fulfilled, and rejected actions for showUsers
      .addCase(showUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handling pending, fulfilled, and rejected actions for deleteUser
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          state.users = state.users.filter((user) => user.id !== id);
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handling pending, fulfilled, and rejected actions for updateUser
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        const updatedUser = action.payload;
        state.users = state.users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userDetail.reducer;
