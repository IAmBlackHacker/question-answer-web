import {connect} from "react-redux";
import {
    setErrorModalScreen,
    showLoadingScreen
} from "./modal/modal.actions";
import {setToken, resetUserData, setUserName, setFirstName, setLastName} from "./user/user.actions";

const mapStateToProps = ({ user, modal }: {user: any, modal: any}) => (
    {
        user: user,
        modal: modal
    }
)

const mapDispatchToProps = (dispatch: any) => ({
    // modal
    showLoadingScreen: (isShow: boolean) => dispatch(showLoadingScreen(isShow)),
    setErrorModalScreen: (modelData: any) => dispatch(setErrorModalScreen(modelData)),

    // user
    setUserName: (username: string) => dispatch(setUserName(username)),
    setFirstName: (firstName: string) => dispatch(setFirstName(firstName)),
    setLastName: (lastName: string) => dispatch(setLastName(lastName)),
    setToken: (token: string) => dispatch(setToken(token)),
    resetUserData: () => dispatch(resetUserData())
})

export const Connector = (component: any) => {
    return connect(mapStateToProps, mapDispatchToProps)(component);
}
