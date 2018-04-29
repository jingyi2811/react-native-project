import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { register } from '../Service'
import { REGISTER_REQUEST, registerSuccess, registerFailure } from './signup.action'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* registerUser(action) {
   try {
     console.log('Saga called',action)
      const user = yield call(register, action.payload);
      console.log('response', user)
      yield put(registerSuccess(user));
   } catch (e) {
      yield put(registerFailure(e));
   }
}

function* watchRegister() {
  yield takeLatest(REGISTER_REQUEST, registerUser);
}

export default watchRegister;