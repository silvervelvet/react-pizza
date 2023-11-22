import React from "react";
import { useState } from "react";
import pizzas from '../assets/pizza.json'

export const Categories = () => {

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index)
  }
    return (
        <div className="categories">
        <ul>
          {
            categories.map((value, i) => 
              <li onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>{value}</li>
            )
          }
        </ul>
      </div>
    )
}