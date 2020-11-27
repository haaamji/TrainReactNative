/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FoIcon from 'react-native-vector-icons/Foundation';

const TodoItem = ({id, textValue, checked, onRemove, onToggle}) => {
    return (
        <View style={style.itemContainer}>
            <TouchableOpacity onPress={() => onToggle(id)}>
                {checked ? (
                    <View style={style.cirle} >
                    <Icon name="ios-chevron-down-circle-sharp" size={30} color="#4F8EF7"/>
                    </View>
                ) : (
                    <View style={style.checkedCirle} >
                    <Icon name="ios-chevron-down-circle-outline" size={30} color="#4F8EF7"/>
                    </View>
                )}
            </TouchableOpacity>
            <Text
            children={textValue}
            style={[style.itemText,
            checked ? style.strikeText : style.unstrikeText ]} />
            {/* onPress 이벤트로 변경 */}
            <TouchableOpacity onPress={() => onRemove(id)}>
                <View style={style.delete} >
                <FoIcon name="x" size={30} color="#ff3333"/>
                </View>
            </TouchableOpacity>
        </View>
    );
};
const style = StyleSheet.create({
    itemContainer: {
        flex: 1,
        borderBottomColor: '#9E9E9E',//밑줄
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    cirle: {
        marginLeft: 20,
        marginRight:20,
    },
    checkedCirle: {
        marginLeft: 20,
        marginRight:20,
    },
    itemText: {
    fontSize: 20,
    marginVertical: 10,
    flex: 5,
    },
    strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
    },
    unstrikeText: {
    color: '#222222',
    },
    delete: {
    marginLeft: 20,
    marginRight: 20,
    }
});

export default TodoItem;
