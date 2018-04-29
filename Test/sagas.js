
import watchRegister from './Signup/signup.saga'
import watchLogin from './Signin/signin.saga'
import watchForgotPass from './ForgotPassword/forgotPassword.saga'
import { fork } from 'redux-saga/effects'

export function* rootSaga () {
    yield [
        fork(watchRegister),
        fork(watchLogin),
        fork(watchForgotPass)
    ];
}