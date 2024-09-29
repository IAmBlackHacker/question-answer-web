import React from 'react';
import './App.css';
import LoginPageComponent from "./main/components/login/LoginPage";
import {Navigate, Route, Routes} from "react-router-dom";
import {NEW_QUESTION_URL, QUESTION_URL} from "./main/constants/UrlConstant";
import {QuestionDisplayComponent} from "./main/components/questions/QuestionDisplayComponent";
import NewQuestionComponent from "./main/components/newquestion/NewQuestionComponent";
import {Connector} from "./redux/Connector";

const ProtectedRoute = ({ children, token }: {children: any, token: string}) => {
    if (!token) {
        return <LoginPageComponent/>;
    }

    return children;
};

function App(props: { user: any }) {
    return (
        <div className="App d-flex bg-background">
            <Routes>
                <Route>
                    <Route path={QUESTION_URL}
                           element={<ProtectedRoute token={props.user.token}><QuestionDisplayComponent/></ProtectedRoute>}/>
                    <Route path={NEW_QUESTION_URL}
                           element={<ProtectedRoute token={props.user.token}><NewQuestionComponent/></ProtectedRoute>}/>

                    <Route path="*" element={<Navigate to={NEW_QUESTION_URL}/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default Connector(App);
