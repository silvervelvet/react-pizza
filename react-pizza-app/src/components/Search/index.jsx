import React, { useContext } from "react";
import s from './Search.module.scss';
import { SearchContext } from '../../App'

export const Search = () => {

    const {searchValue, setSearchValue} = useContext(SearchContext)

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