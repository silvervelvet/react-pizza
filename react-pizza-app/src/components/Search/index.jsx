import React from "react";
import s from './Search.module.scss'

export const Search = ({ searchValue, setSearchValue }) => {
    return (
        <div className={s.root}>
            <input 
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                className={s.input} 
                placeholder="поиск пиццы" />
        </div>
    )
}