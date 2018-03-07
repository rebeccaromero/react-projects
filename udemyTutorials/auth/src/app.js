import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm.js';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDSaytLOHObXA0VsdhxBIjBjXlrQU9RngI',
      authDomain: 'auth-97553.firebaseapp.com',
      databaseURL: 'https://auth-97553.firebaseio.com',
      projectId: 'auth-97553',
      storageBucket: 'auth-97553.appspot.com',
      messagingSenderId: '327559793117'
    })
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;