/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Alert, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View,ScrollView, TextInput} from 'react-native';
import MyButton from '../controls/MyButton';

import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'users.db'});

const RegisterUser = ({navigation}) => {
  let [userName,setUserName] = useState('');
  let [userContact,setUserContact] = useState('');
  let [userAddress,setUserAddress] = useState('');

  const registerUser = () => {
    console.log(userName, userContact, userAddress);
 //  alert(`${userName}, ${userContact}, ${userAddress}`);
    if (userName.length === 0) {
      alert('이름을 입력하세요!');
      return;
    }
    if (userContact.length === 0) {
      alert('번호를 입력하세요!');
      return;
    }
    if (userAddress.length === 0) {
      alert('주소를 입력하세요!');
      return;
    }
    //DB처리
    db.transaction(function(txn) {
      txn.executeSql(
        `INSERT INTO table_user
          (user_name,user_contact,user_address)
         VALUES 
          (?,?,?)`,
        [userName,userContact,userAddress],//parmetar값
        function(tx, res){//실행결과
          console.log('res',res.rowsAffected);
          if (res.rowsAffected > 0){
            Alert.alert(
              '등록 성공',
              '사용자 등록 성공했습니다.',
              [
                {text: 'OK', onPress: () => navigation.navigate('HomeScreen')},
              ],
              {cancelable: false}
            );
          } else {
            alert('등록실패!');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView>
          <KeyboardAvoidingView>
          <Text
          children="등록 화면"
          style={{textAlign: 'center', fontSize: 20}}
        />
        <TextInput
        placeholder="이름입력"
        onChangeText={(userName) => setUserName(userName)}
        maxLength={20}
        style={style.textInput}
        />
        <TextInput
        placeholder="휴대폰 번호 입력"
        onChangeText={(userContact) => setUserContact(userContact)}
        maxLength={20}
        keyboardType="numeric"
        style={style.textInput}
        />
        <TextInput
        placeholder="주소 입력"
        onChangeText={(userAddress) => setUserAddress(userAddress)}
        maxLength={50}
        style={style.textInput}
        />
        <MyButton
        title="사용자 저장"
        //ButtonClick={() => {alert('저장처리');}}
        onButtonClick={registerUser}
        />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
 textInput: {

 },

});

export default RegisterUser;
