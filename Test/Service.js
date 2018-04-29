
export function register(payload) {
  return fetch('http://strydebazaarsolution.com/api/wb/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: payload.username,
      email: payload.email,
      password: payload.password,
      telephone: payload.phone
    }),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('Register::::',responseJson)
      if(responseJson.message === 'Registration successfully') {
        return responseJson
      }
      if (responseJson.errors && responseJson.errors.length > 0) {
        throw (responseJson.errors[0].message)
      }
      return responseJson;
    })
    .catch((error) => {
      throw (error)
      console.log("Error:", error)
      console.error(error);
    });
}

export function login(payload) {
  return fetch('http://strydebazaarsolution.com/api/wb/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
    }),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('Login::::',responseJson)
      if (responseJson.message === 'Login successfully') {
        return responseJson;        
      } else {
        throw ('Invalid username/password')        
      }
    })
    .catch((error) => {
      throw (error)

      console.error(error);
    });
}

export function forgotPassword(payload) {
  return fetch('http://strydebazaarsolution.com/api/wb/forgot_password', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: payload.email,
    }),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('Forgot password:::',responseJson)
      if (responseJson) {
        return responseJson;        
      } else {
        throw ('email does not exist')        
      }
    })
    .catch((error) => {
      throw (error)

      console.error(error);
    });
}