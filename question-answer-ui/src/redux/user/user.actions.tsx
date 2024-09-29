import { UserActionTypes } from "./user.types";

export const setUserName = (username: string) => (
    {
        type: UserActionTypes.SET_USERNAME,
        payload:username
    }
)

export const setFirstName = (firstName: string) => (
    {
        type: UserActionTypes.SET_FIRST_NAME,
        payload:firstName
    }
)

export const setLastName = (lastName: string) => (
    {
        type: UserActionTypes.SET_LAST_NAME,
        payload:lastName
    }
)

export const setToken = (token: string) => (
    {
        type: UserActionTypes.SET_USER_TOKEN,
        payload:token
    }
)

export const resetUserData = () => ({
    type: UserActionTypes.RESET_USER_DATA
})
