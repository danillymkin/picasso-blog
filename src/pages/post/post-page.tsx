import { redirect, useNavigate, useParams } from 'react-router-dom'

import { GoBack } from '@features/go-back'

import { postApi } from '@entities/post'
import { PostDetails } from '@entities/post/ui/post-details'

import { PATH_PAGE } from '@shared/lib/react-router'

export const PostPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  if (!id || !Number(id)) {
    return redirect(PATH_PAGE.notFound)
  }

  const { data: post, isError, isLoading } = postApi.useFetchPostByIdQuery(+id)

  if (isLoading) {
    return <p>Загрузка...</p>
  }

  if (isError || !post) {
    return navigate(PATH_PAGE.notFound, { replace: true })
  }

  return <PostDetails post={post} slot={<GoBack />} />
}
