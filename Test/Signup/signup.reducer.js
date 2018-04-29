import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from './signup.action'

const initialState = {
    response: undefined,
    error: undefined,
    isLoggedIn: false,
    isLoading: false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {isLoading: true}
        case REGISTER_SUCCESS:
            return {
                response: action.response,
                isLoggedIn: true,
                isLoading: false
            }
        case REGISTER_FAILURE:
            return {
                error: action.error,
                isLoggedIn: false,
                isLoading: false
            }
        default:
            return state
    }
}