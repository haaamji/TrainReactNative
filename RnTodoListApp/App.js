import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  View,
  Platform,
} from 'react-native';

import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

//function 같음, class는 state를 만들어서 사용해야한다
const App = () => {
  //배열로 값 들어감 : 변수(배열),함수
  //todos : {id :1, textValue:'todoitem', checked : true/false}
  const [todos, setTodos] = useState([]);

  //할일 목록 추가
  const addTodo = (text) => {
    //...이전에 값을 새로운 배열에 붙이는 방법
    setTodos([
      ...todos,
      {id: todos.length + 1, textValue: text, checked: false},
    ]);
    //Axios DB처리, INSERT API호출
  };
  //삭제
  const onRemove = (id) => {
    //alert(id); id값이 넘어오는지 확인
    //배열에 있는 filter기능으로 처리, while문과 동일
    console.log(`App / delete id => ${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    console.log(`App / toggle id => ${id}`);
    console.log('App onToggle defore=>', todos);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
    console.log('App onToggle after =>', todos);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={style.container}>
        <Text children="TODO LIST" style={style.appTitle} />
        <View style={style.card}>
          <TodoInsert onAddtodo={addTodo} />
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6699ff',
  },
  appTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
    fontStyle: 'italic',
  },
  card: {
    backgroundColor: '#ffffff',
    flex: 1, //밑에 까지 공간 차지
    borderTopLeftRadius: 15, //Racius반지름! 둥글게 만들어준다
    borderTopRightRadius: 15,
    //옆 공간
    marginLeft: 10,
    marginRight: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#f2ccff',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: 10,
          width: 10,
        },
      },
      android: {
        elevation: 20,
      },
    }),
  },
});

export default App;
