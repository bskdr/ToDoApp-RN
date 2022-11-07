import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './TodoItem.style';

const TodoItem = props => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.container,
          props.toDo.isCompleted
            ? styles.container_completed
            : styles.container_not_completed,
        ]}
        onPress={() => props.onPress(props.toDo.id)}
        onLongPress={() => props.onLongPress(props.toDo.id)}>
        <Text
          style={[
            props.toDo.isCompleted
              ? styles.text_completed
              : styles.text_not_completed,
          ]}>
          {props.toDo.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
