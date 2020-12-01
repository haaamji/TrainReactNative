/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import MyButton from '../controls/MyButton';

import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'users.db' });

const UpdateUser = ({ navigation }) => {

  let [userId, setInputUserId] = useState(''); //ViewUser
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let updateAllInfo = (name, contact, address) => {
    setUserName(name);
    setUserContact(contact);
    setUserAddress(address);
  };

  const searchUesr = () => {
    //useEffect(() => {
    db.transaction((txn) => {
      txn.executeSql(
        'SELECT * FROM table_user WHERE user_id = ?',
        [userId],
        (txn, res) => {
          console.log('record num :', res.rows.length);
          console.log('record : ', res.rows.item(0));
          if (res.rows.length === 1) { //받아올 객체는 무조건 1건!
            var temp = res.rows.item(0);
            //  setUserData(res.rows.item(0));
            updateAllInfo(
              temp.user_name, temp.user_contact, temp.user_address
            );
          } else {
            alert("유저 정보가 없습니다.");
            // setUserData({}); //빈값으로 다시 바꿈
            updateAllInfo('', '', '');
            setInputUserId('');
          }
        }
      );
    });
  };

  const updateUser = () => {
    console.log(userId, userName, userContact, userAddress);
  //if (userId.length === 0){
    if (!userId) {
      alert('유저 번호를 입력하세요!');
      return;
    }
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
    db.transaction(function (txn) {
      txn.executeSql(
        `UPDATE table_user SET
          user_name =?,
          user_contact =?,
          user_address= ?
        WHERE user_id =?`,
        [userName, userContact, userAddress, userId],//parmetar값
        function (tx, res) {//실행결과
          console.log('res', res.rowsAffected);
          if (res.rowsAffected > 0) {
            Alert.alert(
              '수정 성공',
              '사용자 정보 업데이트가 완료되었습니다.',
              [
                { text: 'OK', onPress: () => navigation.navigate('HomeScreen') },
              ],
              { cancelable: false }
            );
          } else {
            alert('등록실패!');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <KeyboardAvoidingView>
            <Text
              children="수정 화면"
              style={{ textAlign: 'center', fontSize: 20 }}
            />
            <View style={{ flex: 1 }}>
              <TextInput
                value={userId}
                placeholder="아이디를 입력하세요"
                style={style.textInput}
                onChangeText={(userId) => setInputUserId(userId)}
              />
              <MyButton title="검색" onButtonClick={searchUesr} />
              {/* {userInfo} */}
            </View>
            <TextInput
              value={userName}
              placeholder="이름입력"
              onChangeText={(userName) => setUserName(userName)}
              maxLength={20}
              style={style.textInput}
            />
            <TextInput
              value={userContact}
              placeholder="휴대폰 번호 입력"
              onChangeText={(userContact) => setUserContact(userContact)}
              maxLength={20}
              keyboardType="numeric"
              style={style.textInput}
            />
            <TextInput
              value={userAddress}
              placeholder="주소 입력"
              onChangeText={(userAddress) => setUserAddress(userAddress)}
              maxLength={50}
              style={style.textInput}
            />
            <MyButton
              title="사용자 저장"
              //ButtonClick={() => {alert('저장처리');}}
              onButtonClick={updateUser}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textInput: {
    margin: 10,
  },

});

export default UpdateUser;
