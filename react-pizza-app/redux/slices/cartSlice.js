import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    items: [],
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
        addItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id);

            if (findItem) {
                findItem.count++
            } else {
                state.items.push(...action.payload,
                    count: 1)
            }

            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            })
        },
        minusItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload);
            if (findItem) {
                findItem.count--;
            }
        },
        removeItem(state, action) {
            state.items.filter(obj => obj.id !== action.payload)
        },
        clearItem(state, action) {
            state.items = [];
            state.totalPrice = 0;
        },
    }
})

export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer