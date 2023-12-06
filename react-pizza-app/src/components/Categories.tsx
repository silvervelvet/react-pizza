import React from "react";
import { useState } from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: any
}

export const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {

  const categories = ['все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

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