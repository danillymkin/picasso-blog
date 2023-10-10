import { useState } from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'

import { PostCard, postApi } from '@entities/post'

export const PostsList = () => {
  const [page, setPage] = useState(1)
  const { data, isFetching, isLoading, isError } =
    postApi.useFetchAllPostsQuery({
      limit: 10,
      page,
    })

  if (isLoading) {
    return <p>Загрузка...</p>
  }

  if (isError || !data) {
    return <div>Не удалось получить посты</div>
  }

  const loadMore = () => {
    if (isFetching) return

    setPage((prev) => prev + 1)
  }

  const isItemLoaded = (index: number) => {
    return !!data.posts[index]
  }

  return (
    <div className="relative flex flex-1 w-full h-full">
      <AutoSizer>
        {({ width, height }) => (
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={data.totalCount}
            loadMoreItems={loadMore}
          >
            {({ onItemsRendered, ref }) => (
              <FixedSizeList
                width={width}
                height={height}
                itemSize={150}
                itemCount={data.totalCount}
                onItemsRendered={onItemsRendered}
                ref={ref}
                overscanCount={2}
              >
                {({ index, style }) => (
                  <div style={style}>
                    {!isItemLoaded(index) ? (
                      'Загрузка...'
                    ) : (
                      <PostCard post={data.posts[index]} />
                    )}
                  </div>
                )}
              </FixedSizeList>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </div>
  )
}
