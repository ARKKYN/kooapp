import axios from 'axios'

import { useInfiniteQuery } from 'react-query'

import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import Tweet from '../Tweet'

function Home() {

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'projects',
    async ({ pageParam = "https://gorest.co.in/public/v1/posts" }) => {
      const res = await axios.get(pageParam)
      return res.data
    },
    {
      getPreviousPageParam: firstPage => {
        return firstPage.meta.pagination.links.previous ?? false;
      },
      getNextPageParam: lastPage => {
        return lastPage.meta.pagination.links.next ?? false;
      },
    }
  )

  const loadMoreButtonRef = React.useRef()

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  })

  return (
    <div>
      <h1>Tweets</h1>
      {status === 'loading' ? (
        <></>
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          {data.pages.map(page => (
            <React.Fragment key={page.meta.pagination.page + 1}>
              {page.data.map(project => <Tweet project={project} key={project.id}/>)}
            </React.Fragment>
          ))}
          <div>
              <button style={{display : "block", margin: "0px auto"}}   ref={loadMoreButtonRef} onClick={fetchNextPage}>
              {isFetchingNextPage
                ? 'Loading ...'
                : hasNextPage
                ? 'Loading ...'
                : 'Nothing more to load'}
            </button>
          </div>
          <div>
            {isFetching && !isFetchingNextPage
              ? 'Background Updating...'
              : null}
          </div>
        </>
      )}
    </div>
  )
}

export default Home;
