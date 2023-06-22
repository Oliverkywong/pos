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
                // const foodIdx = state.foodIds.indexOf(action.payload)
                // console.log("action.payload",action.payload)
                console.log("state.foodIds",state.foodIds)
                const foodIdx = state.foodIds.findIndex(
                    (item) => item === action.payload
                  );
                //   const foodIds = state.foodIds.splice(foodIdx, 1)
                state.foodIds.splice(foodIdx, 1)
                // foodIds[foodIdx] = action.payload
                console.log("state.foodIds",state.foodIds)
                // console.log(foodIdx)
                // console.log(foodIds)
                return {
                    ...state,
                    foodIds: state.foodIds
                }
            }
        default:
            return state;
    }
}