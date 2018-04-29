import React from 'react';
import { Keyboard,Alert, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { forgotPassRequest } from './forgotPassword.action'
import { NavigationActions } from 'react-navigation';

class ForgotPassword extends React.Component {

  static navigationOptions = {
    title: 'Forgot Password',
  }

  constructor() {
    super()
    this.state = {
      email: '',
      emailError: undefined,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.forgotPassword.response || nextProps.forgotPassword.error) {
      var message
      message = nextProps.forgotPassword.error && nextProps.forgotPassword.error.length > 0 ? nextProps.forgotPassword.error : 'Password reset link has been sent to your email'
      
      
      Alert.alert(
        'Alert',
        message,
        [
          {
            text: 'OK', onPress: () => {
              if (this.props.forgotPassword.response) {
              }
            }
          },
        ],
        { cancelable: false }
      )
    }
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
  
    if (!validMail && !validPass) {
      this.props.forgotPassRequest(this.state)
    }

  }

  render() {   
    return (
      <ScrollView style={styles.scrollContainer}>
        <KeyboardAvoidingView behavior={'position'}>            
          {this.props.forgotPassword.isLoading && <ActivityIndicator size="large" color="#0000ff" animating={true}
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
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={styles.button}
          onPress={(e) => {
            Keyboard.dismiss()
            this.onSubmit()
          }
          }
        >
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    forgotPassword: state.forgotPassword
  }
}

export default connect(
  mapStateToProps,
  {
    forgotPassRequest
  }
)(ForgotPassword)

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
  },
  header: {
    backgroundColor: 'yellow'
  }
});
