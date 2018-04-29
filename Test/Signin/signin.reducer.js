import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './signin.action'

const initialState = {
    response: undefined,
    error: undefined,
    isLoggedIn: false,
    isLoading: false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
        return {isLoading: true}
        case LOGIN_SUCCESS:
            return {
                response: action.response,
                isLoggedIn: true,
                isLoading: false
            }
        case LOGIN_FAILURE:
            return {
                error: action.error,
                isLoggedIn: false,
                isLoading: false
            }
        default:
            return state
    }
}