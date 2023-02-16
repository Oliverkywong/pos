import { LoadingState } from "../../model";

export interface Food{
    id: number;
    foodname: string;
    price: number;
    foodpic: string;
}

export interface OrderState {
    foods: Food[];
    loadingState: LoadingState;
}
