import { Navigate, useRoutes } from 'react-router-dom'

import { HomePage } from '@pages/home'
import { Layout } from '@pages/layout'
import { NotFoundPage } from '@pages/not-found'
import { PostPage } from '@pages/post'

import { PATH_PAGE } from '@shared/lib/react-router'

export const RouterProvider = () => {
  return useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: PATH_PAGE.home,
          element: <HomePage />,
        },
        {
          path: 'post',
          children: [
            {
              element: <Navigate to={PATH_PAGE.notFound} replace />,
              index: true,
            },
            {
              path: ':id',
              element: <PostPage />,
            },
          ],
        },
      ],
    },
    {
      path: PATH_PAGE.notFound,
      element: <NotFoundPage />,
    },
    {
      path: '*',
      element: <Navigate to={PATH_PAGE.notFound} replace />,
    },
  ])
}
