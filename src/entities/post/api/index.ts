import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQuery } from '@shared/api'

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
  baseQuery,
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
    fetchPostById: build.query<Post, number>({
      query: (id: number) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
})
