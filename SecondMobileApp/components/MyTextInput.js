/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {TextInput, StyleSheet, KeyboardAvoidingView, Button, TouchableOpacity, Text} from 'react-native';

class MyTextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password:'',
    };
  }

  handleEmail = (email) => {
    this.setState({email: email});
  };
  handlePassword = (password) => {
    this.setState({password: password});
  };
  handleLogin = (email,password) => {
    // eslint-disable-next-line no-alert
    alert(`email: ${this.state.email}\nppassword: ${this.state.password}`);
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <TextInput
          style={style.input}
          placeholder={'Email'}
          value={this.state.email}
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={style.input}
          placeholder={'Password'}
          value={this.state.password}
          onChangeText={this.handlePassword}
          secureTextEntry
        />
        {/* <Button title="Submit" onPress={this.handleLogin}/> */}
        <TouchableOpacity style={style.submitButton} onPress={this.handleLogin}>
          <Text children={'Submit'} style={style.submitstyle}/>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  input: {
    margin: 10,
    height: 40,
    borderBottomColor: '#8000ff',
    borderBottomWidth: 1,
  },
  submitButton: {
    padding: 10, //안에서 영역
    height: 40,
    margin: 15, //내영역에서 바깥쪽
    backgroundColor: '#668cff',
  },
  submitstyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color:'white',
    fontWeight: '100',
  },
});

export default MyTextInput;
