/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, ScrollView } from 'react-native';

import MyButton from '../controls/MyButton';

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'users.db' });

const ViewAllUsers = ({ navigation }) => {
    let [listItems, setListItems] = useState([]);
    useEffect(() => {
        db.transaction((txn) => {
            txn.executeSql(
                'SELECT * FROM table_user',
                [],
                (txn, res) => {
                    console.log('record num :', res.rows.length);
                    var temp = [];
                    for (let i = 0; i < res.rows.length; i++) {
                        temp.push(res.rows.item(i));
                    }
                    setListItems(temp);
                }
            );
        });//특정 값을 바꿀거면 [name]이렇게 변경
    }, []);//값이 바뀔 때 마다 렌더링이 다시 되기 때문에 빈값을 넣어줘야한다. 무한반복 막음
        
    const newListItems = listItems.map((item, index) => //key값을 주기위해 index값 넣음
        <View key={index} style={{ borderBottomColor: '#b3b3ff', borderBottomWidth: 1 ,padding: 15}}>
            <Text children={item.user_id} />
            <Text children={item.user_name} />
            <Text children={item.user_contact} />
            <Text children={item.user_address} />
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    {newListItems}
                </View>
                <MyButton title="메인으로" onButtonClick={() => navigation.navigate('HomeScreen')} />
            </ScrollView>

        </SafeAreaView>
    );
};

export default ViewAllUsers;
