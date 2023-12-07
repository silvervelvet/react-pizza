import React, { useCallback, useContext, useState } from "react";
import s from './Search.module.scss';
import { SearchContext } from '../../App'
import debounce from "lodash.debounce";



export const Search: React.FC = () => {

    const {searchValue, setSearchValue} = useContext(SearchContext)
    const [value, setValue] = useState<string>('')

    const updateSearchValue = useCallback(
        debounce((str: string) => {
            setSearchValue(str)
        }, 250),
        []
    )

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        updateSearchValue(event.target.value)
    }

    return (
        <div className={s.root}>
            <input 
                value={searchValue}
                onChange={onChangeInput}
                className={s.input} 
                placeholder="поиск пиццы" />
        </div>
    )
}