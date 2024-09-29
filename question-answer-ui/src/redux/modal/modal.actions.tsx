import { ModalActionTypes } from "./modal.types";

export const showLoadingScreen = (isShow: boolean) => (
    {
        type: ModalActionTypes.SET_LOADING_SCREEN,
        payload:isShow
    }
)

export const setErrorModalScreen = (model_data: any) => (
    {
        type: ModalActionTypes.SET_ERROR_MODAL_SCREEN,
        payload: model_data
    }
)
