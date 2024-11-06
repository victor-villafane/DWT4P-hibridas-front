import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <nav>nav</nav>
            <Outlet />
        <footer>footer</footer>
    </>
  )
}

export default Layout