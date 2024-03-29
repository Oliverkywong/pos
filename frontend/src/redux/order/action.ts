import axios from "axios";
import { AppDispatch } from "../../store";
import { Food } from "./state";

export function LoadedFoods(foods: Food[]) {
    return {
        type: '@@food/LOADED_FOODS' as const,
        payload: foods
    }
}

export function LoadedOneFood(food: Food) {
    return {
        type: '@@food/LOADED_ONE_FOOD' as const,
        payload: food
    }
}

type LoadedFoodAction = ReturnType<typeof LoadedFoods>
type LoadedOneFoodAction = ReturnType<typeof LoadedOneFood>

export type FoodAction = LoadedFoodAction | LoadedOneFoodAction

export function loadFoods(parm: string = '') {
    return async (dispatch: AppDispatch) => {
        const res = await axios.get(`/menu${parm}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(res)
        // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        // if (localStorage.getItem('token') !== null) {
            dispatch(LoadedFoods(res.data))
        // }
    }
}

export function loadOneFood(id: string) {
    return async (dispatch: AppDispatch) => {
        const res = await axios.get(`/menu/${id}`)
        console.log(res)
        if (localStorage.getItem('token') !== null) {
            dispatch(LoadedOneFood(res.data))
        }
    }
}