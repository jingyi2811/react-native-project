import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import registerReducer from './Signup/signup.reducer'
import watchRegister from './Signup/signup.saga'
import { rootSaga } from './sagas'
import Welcome from './Welcome'

export default class Menu extends React.Component {

  static navigationOptions = {
    header: null,
  }

  render() {
    const navigate = this.props.navigation.navigate

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Test React</Text>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Signup', { name: 'Jane' })}
          >
            <Text style={styles.text}> SIGN UP </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate('Signin', { name: 'Jane' })}
          >
            <Text style={styles.text}> SIGN IN </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    flex: 2,
    width: '100%',
    alignItems:'center'
  },
  headerContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    width: '70%',
    margin: 20,
    height: 50,
    borderRadius: 30,
    borderColor: 'lightgrey',
  },
  text: {
    color: 'white'
  },
  header: {
    fontFamily: 'Cornerstone',
    color: 'white',
    fontSize: 30
  }
});
