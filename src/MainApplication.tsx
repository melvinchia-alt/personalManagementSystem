import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { Outlet } from 'react-router'

function MainApplication(): React.JSX.Element {
  return (
    <>
      <Sidebar />
      <main className="flex h-full w-full min-w-0 flex-col pb-0 sm:ml-20 lg:ml-0">
        <Header />
        <Outlet />
      </main>
    </>
  )
}

export default MainApplication
