import { Navigate, useParams } from 'react-router-dom'

import { GoBack } from '@features/go-back'

import { postApi } from '@entities/post'
import { PostDetails } from '@entities/post/ui/post-details'

import { PATH_PAGE } from '@shared/lib/react-router'

export const PostPage = () => {
  const { id } = useParams()

  if (!id || !Number(id)) {
    return <Navigate to={PATH_PAGE.notFound} replace />
  }

  const { data: post, isError, isLoading } = postApi.useFetchPostByIdQuery(+id)

  if (isLoading) {
    return <p>Загрузка...</p>
  }

  if (isError || !post) {
    return <Navigate to={PATH_PAGE.notFound} replace />
  }

  return <PostDetails post={post} slot={<GoBack />} />
}
