import { LoadingState } from "../../model";
import { OrderState } from "./state";
import { FoodAction } from "./action";

const initialState: OrderState = {
    foods: [],  
    loadingState: LoadingState.NotLoaded
}

export function orderReducer(state: OrderState = initialState, action: FoodAction): OrderState {
    switch (action.type) {
        case '@@food/LOADED_ONE_FOOD':
            {
                const foodIdx = state.foods.findIndex((food) => food.id === action.payload.id)
                const foods = state.foods.slice()
                foods[foodIdx] = action.payload
                return {
                    ...state,
                    foods: foods
                }
            }
        case '@@food/LOADED_FOODS':
            return {
                ...state,
                foods: action.payload
            }
        default:
            return state;
    }
}