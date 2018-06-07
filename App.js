import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import FormLogin from './src/components/FormLogin'
import FormCadastro from './src/components/FormCadastro'





const RootStack = createStackNavigator(
  {
    Home: FormLogin,
    Cadastro: FormCadastro,
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends Component {
  
  render() { 
    
    return <RootStack />;
  }
}

//<Button
//title="Go to page test"
//onPress={() => this.props.navigation.navigate('Cadastro')}
///>


