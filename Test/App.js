import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Menu from './Menu';
import Signup from './Signup';
import Signin from './Signin'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import registerReducer from './Signup/signup.reducer'
import loginReducer from './Signin/signin.reducer'
import forgotPasswordReducer from './ForgotPassword/forgotPassword.reducer'
import { rootSaga } from './sagas'
import  RootNavigator  from './Root'

const reducer = combineReducers({ register: registerReducer, login: loginReducer, forgotPassword: forgotPasswordReducer })
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider >
    )
  }
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
