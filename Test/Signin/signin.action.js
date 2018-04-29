export const LOGIN_REQUEST = 'LOGIN_REQUEST' 
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' 
export const LOGIN_FAILURE = 'LOGIN_FAILURE' 

export function loginRequest(payload) {
    return {
        type: LOGIN_REQUEST,
        payload
    }
}

export function loginSuccess(response) {
    console.log('Success', response)
    return {
        type: LOGIN_SUCCESS,
        response
    }
}

export function loginFailure(error) {
    console.log('Success', error)    
    return {
        type: LOGIN_FAILURE,
        error
    }
}