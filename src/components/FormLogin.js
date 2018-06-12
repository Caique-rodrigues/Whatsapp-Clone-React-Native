import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'


export default class FormLogin extends React.Component {

    static navigationOptions = { header: null };

    render() {
        return (
            <View style={styles.mainView}>

                <View style={styles.firstView} >
                    <Text style={styles.mainText}>Whatsapp Clone</Text>
                </View>

                <View style={styles.secondView} >
                    <TextInput placeholder='E-mail' style={styles.textInputStyle1} />
                    <TextInput placeholder='Senha' style={styles.textInputStyle1} />


                    <View style={styles.message}>
                        <Text style={styles.textSignIn}>Ainda não tem cadastro?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Cadastro')}>
                            <Text style={{ marginLeft: 8, fontSize: 20, color: '#115e54' }}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>


                </View>

                <View style={styles.thirdView} >
                    <TouchableOpacity onPress={() => false} style={styles.buttonAccess}>
                        <Text style={styles.textButtonStyle}>ACESSAR</Text>
                    </TouchableOpacity>
                </View>




            </View>

        )

    }

}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 25
    },
    mainView: {
        flex: 1,
        padding: 10,
    },
    firstView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondView: {
        flex: 2
    },
    thirdView: {
        flex: 2
    },
    textInputStyle1: {
        fontSize: 20,
        height: 45
    },
    textSignIn: {
        fontSize: 20
    },
    buttonAccess: {
        backgroundColor: '#115e54',
        height: 35,
        borderRadius: 2,
        alignItems: 'center',
        padding: 10
    },
    textButtonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    message: {
        flexDirection: 'row'
    }


})