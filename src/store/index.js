import { configureStore } from '@reduxjs/toolkit';

import { news } from './news/query';
import { users } from './users/query';

export const store = configureStore({
  reducer: {
    news: news.reducer,
    users: users.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(news.middleware, users.middleware),
});
