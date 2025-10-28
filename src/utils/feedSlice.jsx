import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      // Agar pehle se feed hai, toh append karo (pagination ke liye)
      if (state && state.length > 0) {
        // Duplicate users avoid karo
        const existingIds = new Set(state.map((user) => user._id));
        const newUsers = action.payload.filter(
          (user) => !existingIds.has(user._id)
        );
        return [...state, ...newUsers];
      }
      // Pehli baar feed load ho raha hai
      return action.payload;
    },

    removeUserFromFeed: (state, action) => {
      return state.filter((user) => user._id !== action.payload);
    },

    // Optional: Feed ko clear karne ke liye (logout pe use kar sakte ho)
    clearFeed: () => {
      return null;
    },
  },
});

export const { addFeed, removeUserFromFeed, clearFeed } = feedSlice.actions;
export default feedSlice.reducer;
