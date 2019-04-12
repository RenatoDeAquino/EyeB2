import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import DashScreen from './screens/DashScreen';
import * as firebase from 'firebase';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);
export default class App extends React.Component {
  render() {
    return <AppNavigator/>;
    
  }
}

const AppSwitchNavigator =  createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashScreen: DashScreen
});

const AppNavigator = createAppContainer
(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    flex: 1,
    backgroundColor: '#19d1e9',
    alignItems: 'center',
    justifyContent: 'center',

  }
});
