import { LoadingState } from "../../model";

export interface CartState {
    foodIds: number[];
    loading: LoadingState;
}
