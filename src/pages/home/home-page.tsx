import { PostsList } from '@widgets/posts-list'

export const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 h-screen w-full py-4">
      <h1 className="text-xl font-semibold text-center">Все посты</h1>

      <PostsList />
    </div>
  )
}
