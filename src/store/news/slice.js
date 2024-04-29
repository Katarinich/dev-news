import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getNews: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getNews } = newsSlice.actions;

export default newsSlice.reducer;
