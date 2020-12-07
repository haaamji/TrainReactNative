/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const TodoListItem = ({ id, text, checked, updateCkeck, deleteTodo }) => {
    //console.log('checked : ', checked); //false ???외ㅐ
    // const newListItems = TodoListItem.map((item, index) => //key값을 주기위해 index값 넣음
    //     <View key={index} style={{ borderBottomColor: '#b3b3ff', borderBottomWidth: 1, padding: 15 }}>
    //         <Text children={item.text} />
    //     </View>
//    );

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => updateCkeck(id, checked)}>
                {checked === 0 ? (
                    <View style={styles.ckeckBox} >
                        <Icon name="circle" size={30} color="black" style={styles.icon} />
                    </View>
                ) : (
                        <View style={styles.ckeckBox} >
                            <Icon name="check-circle" size={30} color="#ff0000" style={styles.icon} />
                        </View>
                    )}
            </TouchableOpacity>
            <Text
                children={text}
                style={[styles.text,
                    checked === 0 ? styles.unstrikeText : styles.strikeText ]} />
            <TouchableOpacity
                style={styles.buttonContainer}
            >
                <Icon name="delete" size={30} color="#ff0000" onPress={() => deleteTodo(id)}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 5,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20,
        width: 100,
    },
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: '#29323c',
    },
    ckeckBox: {
        margin: 10,
    },
    icon: {
        margin: 10,
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
});

export default TodoListItem;
