export const FORGOTPASS_REQUEST = 'FORGOTPASS_REQUEST' 
export const FORGOTPASS_SUCCESS = 'FORGOTPASS_SUCCESS' 
export const FORGOTPASS_FAILURE = 'FORGOTPASS_FAILURE' 

export function forgotPassRequest(payload) {
    return {
        type: FORGOTPASS_REQUEST,
        payload
    }
}

export function forgotPassSuccess(response) {
    console.log('Success', response)
    return {
        type: FORGOTPASS_SUCCESS,
        response
    }
}

export function forgotPassFailure(error) {
    console.log('Success', error)    
    return {
        type: FORGOTPASS_FAILURE,
        error
    }
}