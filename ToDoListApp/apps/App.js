import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Alert,
} from 'react-native';

import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'todo.db'});

const App = () => {
  // todos: {id: Number, textValue: string, checked: boolean }
  const [todos, setTodos] = useState([]);
  // let [text, setText] = useState('');

  useEffect(() => {
    //alert('useEffect');
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='todo_table'",
        [],
        function (tx, res) {
          //console.log('item: ', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS todo_table', []);
            txn.executeSql(
              `CREATE TABLE  IF NOT EXISTS todo_table (
                          id INTEGER PRIMARY KEY AUTOINCREMENT,
                          textValue	TEXT NOT NULL,
                          checked	INTEGER NOT NULL DEFAULT 0);`,
              [],
            );
            console.log('table regen!');
          }
        },
      );
    }, []);
    todoListView();
  });

  const addTodo = (text) => {
    db.transaction(function (txn) {
      txn.executeSql(
        `INSERT INTO todo_table
              (textValue,checked)
          VALUES 
              (?,0)`,
        [text],
        function (tx, res) {
          console.log('res', res.rowsAffected);
          if (res.rowsAffected) {
            console.log('add성공');
          } else {
            console.log('add실패!');
          }
        },
      );
    }, []);
    todoListView();
  };

  //리스트
  const todoListView = () => {
    // setText(text);
    db.transaction((txn) => {
      txn.executeSql('SELECT * FROM todo_table', [], (tx, res) => {
        //console.log('record num :', res.rows.length);
        var temp = [];
        for (var i = 0; i < res.rows.length; ++i) {
          temp.push(res.rows.item(i));
        }
        setTodos(temp);
        //console.log('todo :', todos);
      });
    }, []);
  };

  //삭제
  const deleteTodo = (id) => {
    console.log(`App / delete id => ${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
    db.transaction((txn) => {
      txn.executeSql('DELETE FROM todo_table WHERE id = ?', [id], (tx, res) => {
        console.log('res :', res.rowsAffected);
        if (res.rowsAffected) {
          //받아올 객체는 무조건 1건!
          Alert.alert(
            '삭제 성공',
            'Todo리스트를 삭제하였습니다.',
            [{text: 'OK'}],
            {cancelable: false},
          );
        } else {
          alert('Todo 삭제에 실패했습니다.');
        }
      });
    });
    todoListView();
  };
  //아이콘 체크
  const updateCkeck = (id, checked) => {
    console.log(`App / toggle id => ${id}`);
    console.log(`App onToggle checked=> ${checked}`);

    db.transaction((txn) => {
      if (checked === 1) {
        txn.executeSql(
          'UPDATE todo_table SET checked = 0 WHERE id =?',
          [id],
          function (tx, res) {
            console.log(`res: ${res.rowsAffected}`);
            if (res.rowsAffected) {
              console.log('CKECK!');
            } else {
              console.log('NONO');
            }
          },
        );
      } else {
        txn.executeSql(
          'UPDATE todo_table SET checked = 1 WHERE id =?',
          [id],
          function (tx, res) {
            console.log(`res: ${res.rowsAffected}`);
            if (res.rowsAffected) {
              console.log('CKECK!');
            } else {
              console.log('NONO');
            }
          },
        );
      }
    });
    todoListView();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title} children="TODO LIST" />
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          updateCkeck={updateCkeck}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8000ff',
  },
  title: {
    color: '#ffffff',
    fontStyle: 'italic',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#80dfff',
  },
  card: {
    backgroundColor: '#f2e6ff',
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default App;
