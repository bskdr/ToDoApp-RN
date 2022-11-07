import {View, Text} from 'react-native';
import React from 'react';
import styles from './Header.style';

const Header = ({todoCount}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yapılacaklar</Text>
      <Text style={styles.text}>{todoCount}</Text>
    </View>
  );
};

export default Header;
