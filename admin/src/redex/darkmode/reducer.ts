import { DarkModeState } from "./state";

const initialState: DarkModeState = {
    darkMode: false
}

export function darkModeReducer(state: DarkModeState = initialState, action: any): DarkModeState {
    switch (action.type) {
        case '@@darkmode/TOGGLE_DARKMODE':
            return {
                darkMode: !state.darkMode
            }
        default:
            return state;
    }
}