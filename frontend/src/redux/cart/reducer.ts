import { LoadingState } from "../../model";
import { CartAction } from "./action";
import { CartState } from "./state";

const initialState: CartState = {
    foodIds: [],
    loading: LoadingState.NotLoaded,
}

export function cartReducer(state: CartState = initialState, action: CartAction): CartState {
    switch (action.type) {
        case '@@cart/LOADED_CART':
            return {
                ...state,
                loading: LoadingState.Loaded,
                foodIds: action.payload
            }
        case '@@cart/ADD_TO_CART':
            return {
                ...state,
                foodIds: [...state.foodIds, action.payload],
            }
        case '@@cart/REMOVE_FROM_CART':
            {
                const foodIdx = state.foodIds.indexOf(action.payload)
                const foodIds = state.foodIds.splice(foodIdx, 1)
                foodIds[foodIdx] = action.payload
                // const newArray = []
                // for (let i = 0; i < state.foodIds.length; i++) {
                //     newArray.push(state.foodIds[i])
                // }
                return {
                    ...state,
                    foodIds: foodIds
                }
            }
        default:
            return state;
    }
}