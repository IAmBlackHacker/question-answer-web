import {ModalActionTypes} from "./modal.types";

const INITIAL_STATE = {
    show_loading_screen: false,
    error_modal_screen: {
        image: "",
        label: "",
        content: "",
        okButton: false,
        show: false
    }
}

const modalReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ModalActionTypes.SET_LOADING_SCREEN:
            return {
                ...state,
                show_loading_screen: action.payload
            };
        case ModalActionTypes.SET_ERROR_MODAL_SCREEN:
            return {
                ...state,
                error_modal_screen: action.payload,
                scan_modal_screen: {}
            };
        default:
            return state;
    }
}

export default modalReducer;
