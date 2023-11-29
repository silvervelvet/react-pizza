import React from "react";
import { useState } from "react";

export const Categories = ({ value, onChangeCategory }) => {

  const categories = ['все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']


    return (
        <div className="categories">
        <ul>
          {
            categories.map((categoryName, i) => 
              <li key={i}  
                  className={value === i ? 'active' : ''}
                  onClick={() => onChangeCategory(i)}>{value}</li>
            )
          }
        </ul>
      </div>
    )
}