import { calcTotalPrice } from "./calcTotalPrice";
import { CartItem } from "../../redux/slices/cart/types";

export const getCartFromLS = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) as CartItem[] : [];
    const totalPrice = calcTotalPrice(items)

    if(items.length) {
        return {
            items,
            totalPrice
        }
    }
}