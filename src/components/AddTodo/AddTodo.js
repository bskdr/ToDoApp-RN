import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './AddTodo.style';

const AddTodo = props => {
  const [buttonFocused, setButtonFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Yapılacak..."
        style={styles.input}
        value={props.text}
        onFocus={() => setButtonFocused(true)}
        onBlur={() => setButtonFocused(false)}
        placeholderTextColor={'#808080'}
        onChangeText={props.onChangeText}
      />
      <TouchableOpacity
        style={[
          styles.button,
          !buttonFocused ? styles.button_passive : styles.button_active,
        ]}
        onPress={props.onPress}>
        <Text style={styles.button_text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
