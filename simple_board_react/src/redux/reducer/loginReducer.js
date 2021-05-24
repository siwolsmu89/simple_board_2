import {SET_LOGIN_STATUS} from "../action/actions";

export default function loginStatus(state, action) {
    const {loginStatus} = state;

    switch (action.type) {
        case SET_LOGIN_STATUS:
            return action.loginStatus
        default:
            return loginStatus;
    }
}