import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from './src/components/button/buttons';
import { useState } from 'react';

export default function App() {

  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const handleInputUsername = (e) => {
    setUsername(e)
    console.log(username)
  }

  const handleInputPassword = (e) => {
    setPassword(e)
    console.log(password)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>App Login Page</Text>
      <View style={styles.inputFields}>
        <TextInput onChangeText={e => handleInputUsername(e)} defaultValue={username} style={styles.inputs} placeholder="USERNAME" />
        <TextInput onChangeText={e => handleInputPassword(e)} defaultValue={password} style={styles.inputs} placeholder="PASSWORD " secureTextEntry />
      </View>
      <Button />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ff95be',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 39,
    marginBottom: 50
  },
  inputFields: {
    width: "87%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    padding: 8,
    width: "100%",
    marginBottom: 20,
    borderWidth: 2.5,
    borderRadius: 15,
  },
  buttonComponent: {
    color: '#008CBA'
  }
});