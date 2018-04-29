import React from 'react';
import { Keyboard,Alert, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { loginRequest } from './signin.action'
import { NavigationActions } from 'react-navigation';

class Signin extends React.Component {

  static navigationOptions = {
    title: 'Sign In',
  }

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      emailError: undefined,
      passwordError: undefined,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login.response || nextProps.login.error) {
      var message
      message = nextProps.login.error && nextProps.login.error.length > 0 ? nextProps.login.error : 'login success'
      
      
      Alert.alert(
        'Alert',
        message,
        [
          {
            text: 'OK', onPress: () => {
              if (this.props.login.response) {
                this.login()
              }
            }
          },
        ],
        { cancelable: false }
      )
    }
  }

  login() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Welcome' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
    return
  }

  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };


  onSubmit() {
    var validMail = false
    var validPass = false
    if (this.validateEmail(this.state.email)) {
      this.setState({ emailError: false })
      validMail = false
    } else {
      this.setState({ emailError: true })
      validMail = true
    }

    if (this.state.password.length >= 3) {
      this.setState({ passwordError: false })
      validPass = false

    } else {
      this.setState({ passwordError: true })
      validPass = true
    }

  
    if (!validMail && !validPass) {
      this.props.loginRequest(this.state)
    }

  }

  render() {   
    return (
      <ScrollView style={styles.scrollContainer}>
        <KeyboardAvoidingView behavior={'position'}>
        {this.props.login.isLoading && <ActivityIndicator size="large" color="#0000ff" animating={true}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F5FCFF88'
            }} />}

          <Text style={styles.label}>EMAIL*</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.setState({
                email: text,
                emailError: false
              })
            }}
          />
          {this.state.emailError === true && <Text style={styles.error}>please enter a valid email</Text>}
          <Text style={styles.label}>PASSWORD*</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                password: text,
                passwordError: false

              })
            }}
          />
          {this.state.passwordError === true && <Text style={styles.error}>please enter a password</Text>}

        </KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.forgotpassButton}
          onPress={(e) => {
            Keyboard.dismiss()
            this.props.navigation.navigate('ForgotPassword')
          }
          }
        >
          <Text style={styles.buttonText}> Forgot password! </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={(e) => {
            Keyboard.dismiss()
            this.onSubmit()
          }
          }
        >
          <Text style={styles.buttonText}> SIGN IN </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  }
}

export default connect(
  mapStateToProps,
  {
    loginRequest
  }
)(Signin)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    alignItems: 'center',
  },
  textbox: {
    margin: 20
  },
  title: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  textInput: {
    borderColor: 'lightgrey',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    color:'white'
  },
  label: {
    marginBottom: 5,
    marginTop: 20,
    color: 'white'
  },
  scrollContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#343434'
  },
  button: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#00ffc1',
    height: 40,
    width: 120,
    borderColor: 'white',
    marginRight: 20,
    marginTop: 20
  },
  forgotpassButton: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginRight:20
    
  },
  buttonText: {
    color: 'white'
  },
  error: {
    color: 'red'
  },
  header: {
    backgroundColor: 'yellow'
  }
});
