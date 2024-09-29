import {Button, FormControl, Spinner} from "react-bootstrap";
import {Dispatch, FormEvent, SetStateAction, useState} from "react";
import HeaderComponent from "../header/HeaderComponent";
import {QUESTION_URL} from "../../constants/UrlConstant";
import {JsonFromFormEvent} from "../../utils/FormManager";
import {BackendPOSTRequest} from "../../webrequests/BackendRequest";
import {NEW_QUESTION_API} from "../../constants/APIConstant";
import {Connector} from "../../../redux/Connector";
import {useNavigate} from "react-router-dom";

export function OnSubmitForm(props:any, navigate: any, event: FormEvent<HTMLFormElement>, setLoading: Dispatch<SetStateAction<boolean>>) {
    event.preventDefault();
    setLoading(true);
    console.log("Creating Question");
    const formJsonData = JsonFromFormEvent(event);

    BackendPOSTRequest(props, NEW_QUESTION_API, formJsonData, (response) => {
        console.log(response);
        setLoading(false);
        navigate(QUESTION_URL);
    }, (error) => {
        console.error(error);
        setLoading(false);
    })

    return false;
}

function NewQuestionComponent(props: any) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    return <section className={"d-flex flex-fill flex-column"}>
        <HeaderComponent button_name={"Show Questions"} link={QUESTION_URL} />
        <div className={"justify-content-center align-items-center d-flex flex-fill"}>
            <div className={"d-flex flex-column bg-white p-3 rounded-5 shadow-sm min-box-width"}>
                <div className={"py-3"}>
                    <h5 className={"fw-bold"}>New Question</h5>
                </div>
                <form className={"flex-grow-1 d-flex flex-column"}
                      onSubmit={(event) => OnSubmitForm(props, navigate, event, setLoading)}>
                    <div className={"flex-grow-1 d-flex align-items-center flex-column"}>
                        <FormControl disabled={loading} placeholder={"Enter the question title"} name={"title"}
                                     className={"rounded-0 my-2 shadow-none"}/>
                        <FormControl rows={8} as={"textarea"} disabled={loading}
                                     placeholder={"Write your question here"} name={"question"}
                                     className={"rounded-0 my-2 shadow-none"}/>
                    </div>
                    <div className={"text-center p-3"}>
                        <Button type={"submit"} className={"rounded-5 bg-primary w-25 fw-bold"} disabled={loading}>
                            Post {" "}
                            {
                                loading && <Spinner size={"sm"}/>
                            }
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </section>
}

export default Connector(NewQuestionComponent);
