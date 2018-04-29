import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,AsyncStorage } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Menu from './Menu';
import Signup from './Signup';
import Signin from './Signin';
import Welcome from './Welcome';
import ForgotPassword from './ForgotPassword'


const RootNavigator = StackNavigator({
  Menu: {
    screen: Menu,
  },
  Signin: {
    screen: Signin,
  },
  Signup: {
    screen: Signup,
  },
  Welcome: {
    screen: Welcome
  },
  ForgotPassword: {
    screen: ForgotPassword
  }
});

export default RootNavigator;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
