import React, { useEffect, useState } from 'react';
import './scss/app.scss';
import { Header } from './components/Header';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import { createContext } from 'vm';
import { store } from '../redux/store'


export const SearchContext = createContext('');

function App() {

   const [searchValue, setSearchValue] = useState('')

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <div className="content">
            <Routes>
              <Route path='/' element={<Home searchValue={searchValue} />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;



