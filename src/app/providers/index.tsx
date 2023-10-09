import { BrowserRouter } from 'react-router-dom'

import { RouterProvider } from './router'

export const Providers = () => {
  return (
    <BrowserRouter>
      <RouterProvider />
    </BrowserRouter>
  )
}
