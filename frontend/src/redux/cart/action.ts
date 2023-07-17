import axios from "axios";
import { AppDispatch } from "../../store";

export function loadedCart(foodIds: number[]) {
    return {
        type: '@@cart/LOADED_CART' as const,
        payload: foodIds
    }
}

export function addToCart(foodId: number) {
    return {
        type: '@@cart/ADD_TO_CART' as const,
        payload: foodId
    }
}

export function removeFromCart(foodId: number) {
    return {
        type: '@@cart/REMOVE_FROM_CART' as const,
        payload: foodId
    }
}

type LoadedCartAction = ReturnType<typeof loadedCart>
type AddToCartAction = ReturnType<typeof addToCart>;
type RemoveFromCartAction = ReturnType<typeof removeFromCart>;

export type CartAction = LoadedCartAction | AddToCartAction | RemoveFromCartAction;

export function loadCart() {
    return async (dispatch: AppDispatch) => {
        const res = await axios.get(`/cart`)
        if (localStorage.getItem('token') !== null) {
            try {
                dispatch(loadedCart(res.data.map((row: any) => { return row.id })))
            } catch (error) {
                dispatch(loadCart())
            }
        }
    }
}

export function fetchAddToCart(id: number) {
    return async (dispatch: AppDispatch) => {
        if (localStorage.getItem('token') !== null) {
            addToCart(id)
            try {
                // const res = await axios.post(`/cart`, {
                //     id: id
                // })
            } catch (error) {
                dispatch(removeFromCart(id))
                dispatch(loadCart())
            }
        }
    }
}