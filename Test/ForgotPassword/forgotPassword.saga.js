import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { forgotPassword } from '../Service'
import { FORGOTPASS_REQUEST, forgotPassSuccess, forgotPassFailure } from './forgotPassword.action'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* forgotPasswordCall(action) {
   try {
     console.log('Saga called',action)
      const user = yield call(forgotPassword, action.payload);
      console.log('response', user)
      yield put(forgotPassSuccess(user));
   } catch (e) {
      yield put(forgotPassFailure(e));
   }
}

function* watchForgotPass() {
  yield takeLatest(FORGOTPASS_REQUEST, forgotPasswordCall);
}

export default watchForgotPass;