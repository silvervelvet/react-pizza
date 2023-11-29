import React, { useEffect, useState } from 'react';
import './scss/app.scss';
import { Sort } from '../components/Sort';
import { Categories } from '../components/Categories';
import { ItemBlock } from '../components/ItemBlock';

export const Home = () => {

    const[items, setItems] = useState([]);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({
      name: 'популярности', sortProperty: 'rating'
    });

    const category =  categoryId > 0 ? `category=${categoryId}` : '';

    useEffect(() => {
      fetch(`https://655f9061879575426b458852.mockapi.io/items?category=${
      category
      }&sortBy=${sortType.sortProperty}`)
      .then((res) => {
        return res.json;
      })
      .then((arr) => {
        setItems(arr);
      })
      window.scrollTo(0, 0);
    }, [categoryId])

    return (
      <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
                <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
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