import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 5,
        margin: 5,
        padding: 10,
        backgroundColor: 'red',
    },
    container_not_completed: {
        backgroundColor: '#7DA453',
    },
    container_completed: {
        backgroundColor: '#37474F',
    },
    text_not_completed: {
        color: '#ffffff',
        fontSize: 16,
    },
    text_completed: {
        color: '#808080',
        textDecorationLine: 'line-through',
        fontSize: 16,
    }
});
