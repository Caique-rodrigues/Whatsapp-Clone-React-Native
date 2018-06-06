import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FormLogin from './src/components/FormLogin'


export default class App extends Component {
  render() {
    return (
      <FormLogin />
    );
  }
}

