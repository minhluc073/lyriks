import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazhamCoreApi = createApi({
  reducerPath: 'shazhamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify81.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '7f4e6b4a90msh5bdc78045e6dae8p1ce55fjsn403043951f73')
      return headers
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/top_200_tracks' }),
  }),
})

export const { useGetTopChartsQuery } = shazhamCoreApi
