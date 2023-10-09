import ReactDOM from 'react-dom/client'
import React from 'react'

import { Providers } from './providers'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
)
