import { Link } from 'react-router-dom'

import { PATH_PAGE } from '@shared/lib/react-router'

import { Post } from '../api'

type PostCardProps = {
  post: Post
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="flex flex-col gap-2 border">
      <h2>
        {post.id}. {post.title}
      </h2>

      <p className="truncate text-sm">{post.body}</p>

      <Link
        to={PATH_PAGE.post.id(post.id)}
        className="bg-zinc-300 inline-flex justify-center"
      >
        Просмотр
      </Link>
    </div>
  )
}
