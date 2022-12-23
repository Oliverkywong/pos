import { LoadingState } from "../../model";

export interface Food{
    id: number;
    foodname: string;
    price: number;
}

export interface OrderState {
    foods: Food[];
    loadingState: LoadingState;
}
