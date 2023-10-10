import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { RouterProvider } from './router'
import { store } from './store'

export const Providers = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterProvider />
      </BrowserRouter>
    </Provider>
  )
}
