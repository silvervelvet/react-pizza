import React, { useEffect, useState } from 'react';
import './scss/app.scss';
import { Sort } from '../components/Sort';
import { Categories } from '../components/Categories';
import { ItemBlock } from '../components/ItemBlock';

export const Home = () => {

    const[items, setItems] = useState([]);

    useEffect(() => {
      fetch('https://655f9061879575426b458852.mockapi.io/items')
      .then((res) => {
        return res.json;
      })
      .then((arr) => {
        setItems(arr);
      })
      window.scrollTo(0, 0);
    }, [])

    return (
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
        </>
    )
}