import React from 'react';
import './scss/app.scss';
import { Header } from './components/Header';
import { Sort } from './components/Sort';
import { Categories } from './components/Categories';
import { ItemBlock } from './components/ItemBlock';
import pizzas from '../src/assets/pizza.json'


function App() {
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
              pizzas.map(o => <ItemBlock key={o.id} {...o}/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



