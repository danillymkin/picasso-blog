import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Post = {
  id: number
  userId: number
  title: string
  body: string
}

type FetchAllPostsParams = {
  limit: number
  page: number
}

type FetchAllPostsResponse = {
  posts: Post[]
  totalCount: number
}

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<FetchAllPostsResponse, FetchAllPostsParams>({
      query: ({ limit = 10, page = 0 }) => ({
        url: '/posts',
        params: {
          _limit: limit,
          _page: page,
        },
      }),
      transformResponse: (posts: Post[], meta) => ({
        posts,
        totalCount: Number(meta?.response?.headers.get('X-Total-Count')),
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      merge: (currentCache, newItems) => {
        currentCache.posts.push(...newItems.posts)
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
  }),
})
