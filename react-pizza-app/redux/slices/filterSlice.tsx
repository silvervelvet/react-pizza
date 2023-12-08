import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Sort = {
    name: string,
    sortProperty: 'rating' | 'title' | 'price'
}

interface FilterSliceState {
    searchValue: string,
    categoryId: number,
    currentPage: number,
    sort: Sort 
}

const initialState: FilterSliceState = {
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSort(state, action: PayloadAction<Sort>) {
            state.sort = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        }
    }
})

export const selectSort = (state) => state.filter.sort

export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer