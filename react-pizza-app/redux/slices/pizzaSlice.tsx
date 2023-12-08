import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CartItem } from './cartSlice';

export type FetchPizzasArgs = Record<string, string>;

type Pizza = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number[]
}

export enum Status {
    LOADING = 'loading',
    SUCCES = 'success',
    ERROR = 'error'
}

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async ({ params: FetchPizzasArgs }) => {
        const { category, search, currentPage, sortBy } = params;
        const { data } = await axios.get(`https://655f9061879575426b458852.mockapi.io/items?category=${category}&sortBy=${sortType}${sortType}`)

        return data as Pizza[];
    }
)

const initialState = {
    items: [],
    totalPrice: 0
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        }
    },
    extraReducers: {
        [pizzaSlice.fulfilled]: (state, action) => {
            console.log(state)
        }
    }
})

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer