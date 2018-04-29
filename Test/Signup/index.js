import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { registerRequest } from './signup.action'
import { NavigationActions } from 'react-navigation';

class Signup extends React.Component {

  static navigationOptions = {
    title: 'Sign Up',
  }

  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: '',
      phone: '',
      userError: undefined,
      emailError: undefined,
      passwordError: undefined,
      phoneError: undefined
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('Inside next props', nextProps.register)
    if (nextProps.register.response || nextProps.register.error) {
      var message
      message = nextProps.register.error > 0 ? nextProps.register.error : 'Register success'


      Alert.alert(
        'Alert',
        message,
        [
          {
            text: 'OK', onPress: () => {
              if (this.props.register.response) {
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

  onSubmit() {
    var validEmail = false
    var validPass = false
    var validUser = false
    var validPhone = false
    if (this.validateEmail(this.state.email)) {
      this.setState({ emailError: false })
      validEmail = false
    } else {
      this.setState({ emailError: true })
      validEmail = true
    }

    if (this.state.username.length > 2 && this.state.username.length <= 255) {
      this.setState({ userError: false })
      validUser = false

    } else {
      this.setState({ userError: true })
      validUser = true
    }

    if (this.state.password.length >= 8 && this.state.password.length <= 50) {
      this.setState({ passwordError: false })
      validPass = false

    } else {
      this.setState({ passwordError: true })
      validPass = true
    }

    if (this.state.phone.length > 0) {
      this.setState({ phoneError: false })
      validPhone = false

    } else {
      this.setState({ phoneError: true })
      validPhone = true
    }

    if (!validEmail && !validPass && !validUser && !validPhone) {
      const register = this.props.registerRequest
      register(this.state)
    }

  }

  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <KeyboardAvoidingView behavior={'position'}>
        {this.props.register.isLoading && <ActivityIndicator size="large" color="#0000ff" animating={true}
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
                  <Text style={styles.label}>NAME*</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.setState({
                username: text,
                userError: false
              })
            }}
          />
          {this.state.userError === true && <Text style={styles.error}>user name must be between 2 to 255 characters</Text>}
          <Text style={styles.label}>EMAIL*</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="email-address"
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
                passwordError:false
              })
            }}
          />
          {this.state.passwordError === true && <Text style={styles.error}>password must be between 8 to 50 characters</Text>}
          <Text style={styles.label}>PHONE*</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="phone-pad"
            onChangeText={(text) => {
              this.setState({
                phone: text,
                phoneError: false
              })
            }}
          />
          {this.state.phoneError === true && <Text style={styles.error}>phone number must be between 10 to 15 characters</Text>}

        </KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.button}
          onPress={(e) => {
            this.onSubmit()

          }
          }
        >
          <Text style={styles.buttonText}> SIGN UP </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    register: state.register
  }
}

export default connect(
  mapStateToProps,
  {
    registerRequest
  }
)(Signup)

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
    marginTop: 40
  },
  buttonText: {
    color: 'white'
  },
  error: {
    color: 'red'
  }
});
