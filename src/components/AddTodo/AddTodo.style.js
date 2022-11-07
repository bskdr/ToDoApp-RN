import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#37474F',
        margin: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    input: {
        width :'100%',
        borderBottomColor: '#78909C',
        color: '#808080',
        borderBottomWidth: 1,
        color: '#ffffff',
        fontSize: 16,
    },
    button: {
        width: '90%',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    button_active: {
        backgroundColor: '#FFA500',
    },
    button_passive: {
        backgroundColor: '#808080',
    },
    button_text: {
        color: '#ffffff',
        fontWeight: '400',
        fontSize: 16,
    }
});
