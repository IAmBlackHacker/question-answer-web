import {UserActionTypes} from "./user.types";

const INITIAL_STATE = {
    username: null,
    firstName: "",
    lastName: "",
    token:null,
    dashboards: []
}

const userReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case UserActionTypes.SET_USERNAME:
            return {
                ...state,
                username: action.payload
            };
        case UserActionTypes.SET_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload
            };
        case UserActionTypes.SET_LAST_NAME:
            return {
                ...state,
                lastName: action.payload
            };
        case UserActionTypes.SET_USER_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case UserActionTypes.RESET_USER_DATA:
            return INITIAL_STATE;
        default:
            return state;
    }
}
export default userReducer;
