/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
} from 'react-native';
//파라미터 위치에 사용{onAddtodo}
const TodoInsert = ({onAddtodo}) => {
    //한건만 받아서 처리 하기 때문에 문자열
    const [newTodoItem, setNewTodoItem] = useState('');

    const handleTodoInput = (newTodo) => {
        setNewTodoItem(newTodo);
    };

    const handleAddTodo = () => {
        if (newTodoItem === ''){
            return;
        }
        console.log(`newTodoItem => ${newTodoItem}`);
        onAddtodo(newTodoItem.replace('\n',''));//값을 보냄
        setNewTodoItem('');//다시 비워주기
    };
//엔터키 이벤트
    const handleKeyPress = (e) => {
        if (e.nativeEvent.key === 'Enter'){
            handleAddTodo();
        }
    };

    return (
        <View style={style.inputContainer}>
            <TextInput
            style={style.input}
            placeholder={'仕事を入力してください。'}
            autoCorrect={true}
            value={newTodoItem}
            onChangeText={handleTodoInput}
            onKeyPress={handleKeyPress}/>
            <View style={style.button}>
                <Button title={'ADD'}
                onPress={handleAddTodo}
                 />
            </View>
        </View>
    );
};
const style = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    input: {
        marginTop: 10,
        padding: 20,
        borderBottomColor: '#6666ff',
        borderBottomWidth: 1,
        fontSize: 20,
        marginLeft: 10,
        backgroundColor: '#e6eeff',
        width: '75%',
    },
    button: {
        marginRight: 10,
    },
});

export default TodoInsert;
