import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

import { Layout } from '@pages/layout'

import { PATH_PAGE } from '@shared/lib/react-router'
import { Loadable } from '@shared/ui/loadable'

const HomePage = Loadable(
  lazy(() =>
    import('@pages/home').then((module) => ({ default: module.HomePage }))
  )
)
const NotFoundPage = Loadable(
  lazy(() =>
    import('@pages/not-found').then((module) => ({
      default: module.NotFoundPage,
    }))
  )
)
const PostPage = Loadable(
  lazy(() =>
    import('@pages/post').then((module) => ({ default: module.PostPage }))
  )
)

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
        {
          path: PATH_PAGE.notFound,
          element: <NotFoundPage />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to={PATH_PAGE.notFound} replace />,
    },
  ])
}
