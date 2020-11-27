/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todos, onRemove, onToggle}) => {
  return (
    <ScrollView contentContainerStyle={style.listContainer}>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </ScrollView>
  );

};
const style = StyleSheet.create({
  listContainer: {
    margin :10,
    alignItems: 'center',
  },
});

export default TodoList;
