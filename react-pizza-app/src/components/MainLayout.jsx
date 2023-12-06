import React from 'react'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div className='wrapper'>
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
            <Header />
            <div className="content">
                <Outlet />
            </div>
        <SearchContext.Provider />
    </div>
  )
}
