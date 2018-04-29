import {
    FORGOTPASS_REQUEST,
    FORGOTPASS_SUCCESS,
    FORGOTPASS_FAILURE
} from './forgotPassword.action'

const initialState = {
    response: undefined,
    error: undefined,
    isLoading: false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case FORGOTPASS_REQUEST:
        return {isLoading: true}
        case FORGOTPASS_SUCCESS:
            return {
                response: action.response,
                isLoading: false
            }
        case FORGOTPASS_FAILURE:
            return {
                error: action.error,
                isLoading: false
            }
        default:
            return state
    }
}