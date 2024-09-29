import {UserPanel} from "../header/UserPanel";
import HeaderComponent from "../header/HeaderComponent";
import {NEW_QUESTION_URL, QUESTION_URL} from "../../constants/UrlConstant";
import {useEffect, useState} from "react";
import {BackendGETRequest, BackendPOSTRequest} from "../../webrequests/BackendRequest";
import {QUESTION_API} from "../../constants/APIConstant";
import {Connector} from "../../../redux/Connector";
import {Spinner} from "react-bootstrap";

interface QuestionFormat {
    question: string;
    title: string;
    user: string;
}

export function QuestionDisplayComponent(props: any) {
    const [data, setData] = useState<QuestionFormat[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        BackendGETRequest(props, QUESTION_API, (response) => {
            setData(response);
            setLoading(false);
        }, (error) => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    return <div className={"flex-fill d-flex flex-column"}>
        <HeaderComponent button_name={"Ask a question"} link={NEW_QUESTION_URL} />
        <div className={"container p-2 flex-grow-1 overflow-scroll"}>
            {
                loading &&
                <div className={"p-3 rounded m-4 d-flex align-items-center justify-content-center"}>
                    <Spinner className={"me-2"}/> Loading Questions ...
                </div>
            }
            {!loading && data.map((question, index) => <PostComponent key={"question_" + index} title={question.title}
                                                          question={question.question} user={question.user}/>)}
        </div>
    </div>
}

function PostComponent({title, question, user}: {title: string, question: string, user: string}) {
    return <div className={"mb-3 rounded-5 bg-white p-3"}>
        <div className={"py-1"}>
            <h5 className={"fw-bold"}>{title}</h5>
        </div>
        <div className={"py-1"}>
            <p className={"m-0"}>{question}</p>
        </div>
        <hr/>
        <div>
            <h5 className={"fw-bold small"}>Asked by:</h5>
            <div>
                <UserPanel name={user} />
            </div>
        </div>
    </div>
}

export default Connector(QuestionDisplayComponent);
