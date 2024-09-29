import {Button, FormControl, Spinner} from "react-bootstrap";
import {Dispatch, FormEvent, SetStateAction, useState} from "react";
import {BackendPOSTRequest} from "../../webrequests/BackendRequest";
import {LOGIN_API} from "../../constants/APIConstant";
import {JsonFromFormEvent} from "../../utils/FormManager";
import {Connector} from "../../../redux/Connector";
import {SetToken, SetUserName} from "../../../redux/ConnectorWrapper";

interface Props {
}

export function OnSubmitForm(props: Props, event: FormEvent<HTMLFormElement>, setLoading: Dispatch<SetStateAction<boolean>>) {
    event.preventDefault();
    setLoading(true);
    let formJsonData = JsonFromFormEvent(event);

    BackendPOSTRequest(props, LOGIN_API, formJsonData, (response) => {
        SetToken(props, "Bearer " + response.access);
        SetUserName(props, "Lokesh Bhoyar");
        setLoading(false);
    }, (error) => {
        console.error(error);
        setLoading(false);
    });
    return false;
}

function LoginPageComponent(props: Props) {
    const [loading, setLoading] = useState(false);

    return <section className={"d-flex flex-fill justify-content-center align-items-center"}>
        <div className={"d-flex flex-column bg-white p-3 rounded-5 shadow-sm min-box-width"}>
            <div className={"p-3"}>
                <h5 className={"text-center fw-bold"}>Login</h5>
            </div>
            <form className={"flex-grow-1 d-flex flex-column"} onSubmit={(event) => OnSubmitForm(props, event, setLoading)}>
                <div className={"flex-grow-1 d-flex align-items-center flex-column"}>
                    <FormControl disabled={loading} placeholder={"Email"} name={"username"} className={"rounded-0 my-2 shadow-none"}/>
                    <FormControl disabled={loading} placeholder={"Password"} name={"password"} className={"rounded-0 my-2 shadow-none"}/>
                </div>
                <div className={"text-center p-3"}>
                    <Button type={"submit"} className={"rounded-5 bg-primary w-25 fw-bold"} disabled={loading}>
                        Login {" "}
                        {
                            loading && <Spinner size={"sm"} />
                        }
                    </Button>
                </div>
            </form>
        </div>
    </section>
}

export default Connector(LoginPageComponent);
