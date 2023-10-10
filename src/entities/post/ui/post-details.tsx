import { Post } from '../api'

type PostDetailsProps = {
  post: Post
  slot?: React.ReactNode
}

export const PostDetails = ({ post, slot }: PostDetailsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div>{slot}</div>

      <h1 className="text-xl">
        {post.id}. {post.title}
      </h1>

      <p>{post.body}</p>
    </div>
  )
}
