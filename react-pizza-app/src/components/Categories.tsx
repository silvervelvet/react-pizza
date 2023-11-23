import React from "react";
import { useState } from "react";

export const Categories = () => {

  const categories = ['все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="categories">
        <ul>
          {
            categories.map((value, i) => 
              <li key={i} onClick={() => setActiveIndex(i)} className={activeIndex === i ? 'active' : ''}>{value}</li>
            )
          }
        </ul>
      </div>
    )
}