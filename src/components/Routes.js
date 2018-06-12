import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import FormLogin from './FormLogin'
import FormCadastro from './FormCadastro'





const RootStack = createStackNavigator(
  {
    Home: FormLogin,
    Cadastro: FormCadastro,
  },
  {
    initialRouteName: 'Home',
  }
);


export default class Routes extends Component {
  
  render() { 
    
    return <RootStack />;
  }
}

//<Button
//title="Go to page test"
//onPress={() => this.props.navigation.navigate('Cadastro')}
///>


