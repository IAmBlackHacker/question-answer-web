import axios from 'axios';
import {optionProvider} from './RequestConfig';
import {FAILURE_STATUS, SUCCESS_STATUS} from '../constants/Constant';

export function BackendGETRequest(
    props: any,
    URL: string,
    successCallback: (response: any) => void,
    failureCallback: (error: any) => void,
    isCache?: boolean,
) {
    console.debug('GET request', URL);
    axios
        .get(URL, optionProvider(props))
        .then(response => {
            if (
                failureCallback !== undefined &&
                response.data.status === FAILURE_STATUS
            ) {
                failureCallback(response);
                return;
            }

            successCallback(response.data);
            return;
        })
        .catch(error => {
            error.url = URL;
            OnError(error, failureCallback);
        });
}

export function BackendPOSTRequest(
    props: any,
    URL: string,
    data: any,
    successCallback: (response: any) => void,
    failureCallback: (error: any) => void,
) {
    console.debug('POST request', URL);
    axios
        .post(URL, data, optionProvider(props))
        .then(response => {
            if (
                failureCallback !== undefined &&
                response.data.status === FAILURE_STATUS
            ) {
                failureCallback(response);
                return;
            }

            successCallback(response.data);
            return;
        })
        .catch(error => {
            error.url = URL;
            OnError(error, failureCallback);
        });
}

function OnError(error: any, failureCallback: (error: any) => void) {
    console.error('[API CALL]:', error);

    if (
        error.response !== undefined &&
        error.response.status === 401 &&
        error.response.data !== undefined &&
        error.response.data.status === FAILURE_STATUS &&
        error.response.data.message !== undefined &&
        error.response.data.message.includes('authentication is required')
    ) {
        console.error("ERROR: ", error);
    }

    if (failureCallback !== undefined) {
        failureCallback(error);
    }
}
