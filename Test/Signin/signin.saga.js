import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { login } from '../Service'
import { LOGIN_REQUEST, loginSuccess, loginFailure } from './signin.action'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* loginUser(action) {
   try {
     console.log('Saga called',action)
      const user = yield call(login, action.payload);
      console.log('response', user)
      yield put(loginSuccess(user));
   } catch (e) {
      yield put(loginFailure(e));
   }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
}

export default watchLogin;
