import {View, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoItem from './components/TodoItem/TodoItem';
import Header from './components/Header/Header';

const data = [];

const App = () => {
  const [todoList, setTodoList] = useState(data);
  const [newTodo, setNewTodo] = useState('');
  const [todoCount, setTodoCount] = useState(0);

  const renderKey = (item, index) => index;
  const renderTodo = ({item}) => (
    <TodoItem toDo={item} onPress={handleComplete} onLongPress={handleRemove} />
  );

  const handleChangeText = text => setNewTodo(text);

  const handleAdd = () => {
    if (newTodo) {
      setTodoList([
        ...todoList,
        {
          id: Math.floor(Math.random() * 1000),
          title: newTodo,
          isCompleted: false,
        },
      ]);
      setTodoCount(todoCount + 1);
    }
    setNewTodo('');
  };

  const handleRemove = id => {
    const newTodos = todoList.filter(item => {
      return item.id !== id;
    });
    setTodoCount(newTodos.filter(x => !x.isCompleted).length);
    setTodoList(newTodos);
  };

  const handleComplete = id => {
    const newTodos = todoList.map((item, index) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    setTodoList(newTodos);
    setTodoCount(todoList.filter(x => !x.isCompleted).length);
  };

  return (
    <View style={styles.container}>
      <Header todoCount={todoCount} />
      <FlatList
        data={todoList}
        keyExtractor={renderKey}
        renderItem={renderTodo}
      />
      <AddTodo
        onPress={handleAdd}
        text={newTodo}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
});
