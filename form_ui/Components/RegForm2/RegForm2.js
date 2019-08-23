import React, {Fragment, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    TextInput,
} from 'react-native';


class RegForm2 extends Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.regForm}>
                    <Text style={styles.header}>Registeration</Text>
                    <TextInput style={styles.textInput} placeholder="Your name" placeholderTextColor="#FFF" underlineColorAndroid={'transparent'} />
                    <TextInput style={styles.textInput} placeholder="Your email" placeholderTextColor="#FFF" underlineColorAndroid={'transparent'} />
                    <TextInput style={styles.textInput} placeholder="Your password" secureTextEntry={true} placeholderTextColor="#FFF" underlineColorAndroid={'transparent'} />
                    <TouchableOpacity style={styles.button}><Text style={styles.btnText}>Sign up</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', paddingRight: 60, paddingLeft: 60, backgroundColor: '#36485F'
    },
    regForm: {
        alignSelf: 'stretch'
    },
    header: {
        fontSize: 24, color: '#FFF', paddingBottom: 10, marginBottom: 40, borderBottomWidth: 1,
        borderBottomColor: '#199187'
    },
    textInput: {
        alignSelf: 'stretch', height: 40, marginBottom: 30, color: '#FFF', borderBottomWidth: 1,
        borderBottomColor: '#f8f8f8'
    },
    button: {
        alignSelf: 'stretch', alignItems: 'center', padding: 20, marginBottom: 20, backgroundColor: '#59cbbd'
    },
    btnText: {color: '#FFF', fontWeight: 'bold'}
});

export default RegForm2;