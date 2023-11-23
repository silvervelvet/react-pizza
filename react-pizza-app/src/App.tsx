import React, { useEffect, useState } from 'react';
import './scss/app.scss';
import { Header } from './components/Header';
import { Sort } from './components/Sort';
import { Categories } from './components/Categories';
import { ItemBlock } from './components/ItemBlock';
import pizzas from '../src/assets/pizza.json'


function App() {

  const[items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://655f9061879575426b458852.mockapi.io/items')
    .then((res) => {
      return res.json;
    })
    .then((arr) => {
      setItems(arr);
    })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              items.map(o => <ItemBlock key={o.id} {...o}/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



