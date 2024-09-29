import {SetToken, SetUserName} from "../../redux/ConnectorWrapper";

export function ResetUserDetails(props) {
    SetUserName(props, null);
    SetToken(props, null);
}
