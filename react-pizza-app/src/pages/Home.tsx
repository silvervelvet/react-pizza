import  { useContext, useEffect } from 'react';
import './scss/app.scss';
import { Sort } from '../components/Sort';
import { Categories } from '../components/Categories';
import { ItemBlock } from '../components/ItemBlock';
import { Pagination } from '../components/Pagination';
import { SearchContext } from '../App';
import { useSelector, useDispatch} from 'react-redux';
import { setCategoryId, setCurrentPage } from '../../redux/slices/filterSlice';
import { fetchPizzas } from '../../redux/slices/pizzaSlice';
import { Link } from 'react-router-dom';

export const Home = async () => {

    const { categoryId, sort, currentPage } = useSelector(state => state.filter);
    const sortType = sort.sortProperty;
    
    const dispatch = useDispatch();
    const items = useSelector((state) => state.pizza.items)

    const [searchValue, setSearchValue] = useContext(SearchContext)


    const category =  categoryId > 0 ? `category=${categoryId}` : '';
    const search =  searchValue ? `search=${searchValue}` : '';

    const onChangeCategory = (id) => {
      dispatch(setCategoryId(id))
    }
    const onChangePage = (number) => {
      dispatch(setCurrentPage(number))
    }

    try {
      dispatch(fetchPizzas({ category, search}));
    } catch (error) {
      console.log('ERROR')
    }


    useEffect(() => {

    }, [categoryId, sortType, searchValue, pageCount]);

    const pizzaz = item.map(obj => <Link key={obj.id} to={`/pizza/${obj.id}`}><ItemBlock  {...obj}/></Link>)

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
            <Pagination value={currentPage} onChangePage={onChangePage}/>
      </div>
    )
}