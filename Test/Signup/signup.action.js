export const REGISTER_REQUEST = 'REGISTER_REQUEST' 
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS' 
export const REGISTER_FAILURE = 'REGISTER_FAILURE' 

export function registerRequest(payload) {
    return {
        type: REGISTER_REQUEST,
        payload
    }
}

export function registerSuccess(response) {
    console.log('Success', response)
    return {
        type: REGISTER_SUCCESS,
        response
    }
}

export function registerFailure(error) {
    console.log('Error', error)    
    return {
        type: REGISTER_FAILURE,
        error
    }
}