import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='h-screen mx-auto max-w-lg'>
      <Outlet />
    </div>
  )
}
