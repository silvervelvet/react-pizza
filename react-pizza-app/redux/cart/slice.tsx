import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getCartFromLS } from '../../../src/utils/getCartFromLocalStorage';
import { calcTotalPrice } from '../../../src/utils/calcTotalPrice';
import { CartSliceState } from './types';



const {items, totalPrice} =  getCartFromLS();

const initialState: CartSliceState = {
    items: cartData.items;
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addItem(state, action) {
        //     state.items.push(action.payload)
        //     state.totalPrice = [...state.items, action.payload]
        // },
        addItem(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find(obj => obj.id === action.payload.id);

            if (findItem) {
                findItem.count++
            } else {
                state.items.push(...action.payload,
                    count: 1,)
            }

            state.totalPrice = calcTotalPrice(state.items)
        },
        minusItem(state, action: PayloadAction<string>) {
            const findItem = state.items.find(obj => obj.id === action.payload);
            if (findItem) {
                findItem.count--;
            }
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items.filter(obj => obj.id !== action.payload)
        },
        clearItem(state, action) {
            state.items = [];
            state.totalPrice = 0;
        },
    }
})

export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;

