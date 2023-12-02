import React, { useContext, useEffect, useState } from 'react';
import './scss/app.scss';
import { Sort } from '../components/Sort';
import { Categories } from '../components/Categories';
import { ItemBlock } from '../components/ItemBlock';
import ReactPaginate from 'react-paginate';
import { Pagination } from '../components/Pagination';
import { Search } from '../components/Search';
import { SearchContext } from '../App';
import { useSelector, useDispatch} from 'react-redux';
import { setCategoryId } from '../../redux/slices/filterSlice';
import axios from 'axios';


export const Home = () => {

  const { categoryId, sort } = useSelector(state => state.filter);
  const sortType = sort.sortProperty
  const dispatch = useDispatch();



    const [searchValue, setSearchValue] = useContext(SearchContext)

    const[items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    // const [categoryId, setCategoryId] = useState(0);
    // const [sortType, setSortType] = useState({
    //   name: 'популярности', sortProperty: 'rating'
    // });

    const category =  categoryId > 0 ? `category=${categoryId}` : '';
    const search =  searchValue ? `search=${searchValue}` : '';

    const onChangeCategory = (id) => {
      dispatch(setCategoryId(id))
    }

    useEffect(() => {
      axios
      .get(`https://655f9061879575426b458852.mockapi.io/items?category=${category}&sortBy=${sortType}${sortType}`)
      .then(res => setItems(res.data))
      
      window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue, currentPage])

    return (
      <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onClickCategoty} />
                <Sort  />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                items.filter(obj => {
                  return obj.title.toLowerCase().includes(searchValue.toLowerCase())
                })
                .map(o => <ItemBlock key={obj.id} {...obj}/>)
                }
            </div>
            <Pagination onChangePage={(number) => setCurrentPage(number)}/>
      </div>
    )
}