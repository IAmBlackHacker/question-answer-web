// modal
export function ShowLoadingScreen(props, isShow) {
    props.showLoadingScreen(isShow);
}

export function SetErrorModalScreen(props, modelData) {
    props.setErrorModalScreen(modelData);
}

// user
export function SetUserName(props, username) {
    props.setUserName(username);
}

export function SetFirstName(props, firstName) {
    props.setFirstName(firstName);
}

export function SetLastName(props, lastName) {
    props.setLastName(lastName);
}

export function SetToken(props, token) {
    props.setToken(token);
}

export function ResetUserData(props) {
    props.resetUserData();
}
