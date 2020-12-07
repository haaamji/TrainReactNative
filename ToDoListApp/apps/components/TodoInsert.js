/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import {Button, StyleSheet, TextInput, View } from 'react-native';


const TodoInsert = ({onAddTodo}) => {

    let [newTodoItem, setNewTodoItem] = useState('');

    const todoInputHandler = (newTodo) => {
        setNewTodoItem(newTodo);
    };
    const handleAddTodo = () => {
        if (newTodoItem === ''){
            return;
        }
        console.log(`newTodoItem => ${newTodoItem}`);
        onAddTodo(newTodoItem.replace('\n',''));//값을 보냄
        setNewTodoItem('');//다시 비워주기
    };

    //엔터키 이벤트
    const handleKeyPress = (e) => {
        if (e.nativeEvent.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="やることを入力してください❕"
                placeholderTextColor={'#999'}
                autoCorrect={false}
                onChangeText={todoInputHandler}
                value={newTodoItem}
                onKeyPress={handleKeyPress}
            />
            <View style={styles.button}>
                <Button title={'✔ADD'} onPress={handleAddTodo} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },

    input: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderBottomColor: '#66ccff',
        borderBottomWidth: 1,
        fontSize: 15,
        marginLeft: 20,
    },
    button: {
        margin: 10,
    },
});

export default TodoInsert;
