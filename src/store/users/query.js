import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const users = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/' }),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (userId) => `users/${userId}`,
    }),
  }),
});

export const { useGetUserByIdQuery } = users;
