/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, ScrollView, TextInput, StyleSheet } from 'react-native';

import MyButton from '../controls/MyButton';

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'users.db' });

const ViewUser = ({ navigation }) => {

    let [userId, setInputUserId] = useState(''); //문자열 : String
    let [userData, setUserData] = useState({}); //객체 : object
    //  let [listItems, setListItems] = useState([]);
    const searchUesr = () => {
        //useEffect(() => {
        db.transaction((txn) => {
            txn.executeSql(
                'SELECT * FROM table_user WHERE user_id = ?',
                [userId],
                (txn, res) => {
                    console.log('record num :', res.rows.length);
                    if (res.rows.length === 1) { //받아올 객체는 무조건 1건!
                        setUserData(res.rows.item(0));
                    } else {
                        alert("유저 정보가 없습니다.");
                        setUserData({}); //빈값으로 다시 바꿈
                    }
                }
            );
        });
    };

    //    const userInfo = () => {
    const userInfo = userData.user_id ? (
        <View style={{ margin: 10 }}>
            <Text children={`아이디 : ${userData.user_id}`} />
            <Text children={`유저 이름 : ${userData.user_name}`} />
            <Text children={`유저 전화번호 : ${userData.user_contact}`} />
            <Text children={`유저 주소 : ${userData.user_address}`} />
        </View>
    ) : (
            <View />
        );


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text
                    children="조회 화면"
                    style={{ textAlign: 'center', fontSize: 20 }}
                />
                <TextInput
                    placeholder="아이디를 입력하세요"
                    style={style.textInput}
                    onChangeText={(userId) => setInputUserId(userId)}
                />
                <MyButton title="검색" onButtonClick={searchUesr} />
                {userInfo}
            </View>
            <MyButton title="메인으로" onButtonClick={() => navigation.navigate('HomeScreen')} />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({

});

export default ViewUser;
