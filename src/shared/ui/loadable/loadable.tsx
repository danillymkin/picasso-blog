import { ElementType, Suspense } from 'react'

export function Loadable<T>(Component: ElementType) {
  return function (props: T) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    )
  }
}
