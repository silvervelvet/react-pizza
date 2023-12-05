import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async ({ params }) => {
        const { category, search } = params
        const { data } = await axios.get(`https://655f9061879575426b458852.mockapi.io/items?category=${category}&sortBy=${sortType}${sortType}`)
        return data
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