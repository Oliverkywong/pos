import { LoadingState } from "../../model";

export interface Food{
    id: number;
    foodName: string;
    price: string;
}

export interface OrderState {
    foods: Food[];
    loadingState: LoadingState;
}
