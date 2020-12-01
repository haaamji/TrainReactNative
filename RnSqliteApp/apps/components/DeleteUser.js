/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, ScrollView, TextInput, StyleSheet, Alert } from 'react-native';

import MyButton from '../controls/MyButton';

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'users.db' });

const DeleteUser = ({ navigation }) => {

    let [userId, setInputUserId] = useState(''); //문자열 : String
    //  let [listItems, setListItems] = useState([]);
    const  deleteUesr = () => {
        //useEffect(() => {
        db.transaction((txn) => {
            txn.executeSql(
                'DELETE FROM table_user WHERE user_id = ?',
                [userId],
                (txn, res) => {
                    console.log('res :', res.rowsAffected);
                    if (res.rowsAffected > 0) { //받아올 객체는 무조건 1건!
                        Alert.alert(
                            '삭제 성공',
                            '사용자 삭제 성공했습니다.',
                            [
                              {text: 'OK', onPress: () => navigation.navigate('HomeScreen')},
                            ],
                            {cancelable: false}
                          );
                    } else {
                        alert("유저 정보 삭제에 실패했습니다.");
                    }
                }
            );
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text
                    children="삭제 화면"
                    style={{ textAlign: 'center', fontSize: 20 }}
                />
                <TextInput
                    placeholder="아이디를 입력하세요"
                    style={style.textInput}
                    onChangeText={(userId) => setInputUserId(userId)}
                />
                <MyButton title="삭제" onButtonClick={deleteUesr} />
            </View>
            <MyButton title="메인으로" onButtonClick={() => navigation.navigate('HomeScreen')} />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({

});

export default DeleteUser;
