/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    input: {
        height: 40,
        width: '70%',
        borderWidth: 1,
        borderStyle: 'solid',

    },
    button: {
        height: 40,
        width: '25%',
        marginHorizontal: 30,
    },

});

export default styles;