import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
const imagemDeFundo = require('../imgs/background-whatsapp.png');


export default class FormCadastro extends React.Component {
    static navigationOptions = { headerTransparent: true };


    render() {
        return (
                <ImageBackground source={imagemDeFundo} style={{flex:2, width: '100%', height: '100%' }}>
                        <View style={styles.form}>
                            <TextInput placeholder='Nome' style={styles.inputTexts} placeholderTextColor="white" />
                            <TextInput placeholder='E-mail' style={styles.inputTexts} placeholderTextColor="white" />
                            <TextInput placeholder='Senha' style={styles.inputTexts} placeholderTextColor="white" />
                        </View>

                        <View styles={styles.positionButton}>
                            <TouchableOpacity style={styles.buttonJoin}>
                                <Text style={styles.textButtonStyle}>botao</Text>
                            </TouchableOpacity>
                        </View>
                </ImageBackground>


        )
    }
}

const styles = StyleSheet.create({
    form: {
        flex:2,justifyContent: 'center'
    },
    inputTexts: {
        fontSize: 20, height: 45, color: 'white'
    },
    buttonJoin: {
        backgroundColor: '#115e54', height: 35, borderRadius: 2, alignItems: 'center', padding: 10
    },
    textButtonStyle: {
        justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: 14, fontWeight: 'bold'
    },
    positionButton:{
       flex:1, marginTop:70
    }

})