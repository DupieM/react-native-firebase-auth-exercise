// TODO: Create Register Screen & Register Functionality
import { TextInput, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { handleSignin } from '../services/authService';

const SignInScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   TODO: Sign up Function
  const signin = () => {handleSignin(email, password)}

  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text>Register</Text>

        <TextInput
        style={styles.inputField}
        placeholder="Your Email"
        onChangeText={newText => setEmail(newText)}
        defaultValue={email}
        />

        <TextInput
            style={styles.inputField}
            placeholder="Your Password"
            onChangeText={newText => setPassword(newText)}
            defaultValue={password}
            />

        <TouchableOpacity style={styles.button} onPress={signin}>
            <Text style={styles.buttonText}>Register Button</Text>
        </TouchableOpacity>
      </View>  
      
    </SafeAreaView>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    inputField: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 15
    },
    button: {
        backgroundColor: "green",
        textAlign: 'center',
        padding: 10,
        marginTop: 30
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }
})