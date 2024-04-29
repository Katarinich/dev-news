import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const news = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/' }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => `news`,
    }),
    getNewsById: builder.query({
      query: (id) => `news/${id}?_expand=user`,
    }),
    getNewsComments: builder.query({
      query: id => `news/${id}/comments?_expand=user`
    })
  }),
});

export const { useGetNewsQuery, useGetNewsByIdQuery, useGetNewsCommentsQuery } = news;
