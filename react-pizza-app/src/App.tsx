import React, { useEffect, useState } from 'react';
import './scss/app.scss';
import { Header } from './components/Header';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Routes, Route, Outlet } from 'react-router-dom';
import { createContext } from 'vm';
import { store } from '../redux/store';
import { FullPizza } from './pages/FullPizza';
import { MainLayout } from './components/MainLayout';

function Parent () {
  return <div>
    <h1>Заголовок</h1>
    <Outlet />
  </div>
}

export const SearchContext = createContext('');


function App() {

   const [searchValue, setSearchValue] = useState('')

  return (
            <Routes>
              <Route path='/' element={<MainLayout />}>
                <Route path='' element={<Home />} />
                <Route path='cart' element={<Cart />} />
                <Route path='pizza/:id' element={<FullPizza />} />
                <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
  );
}

export default App;



