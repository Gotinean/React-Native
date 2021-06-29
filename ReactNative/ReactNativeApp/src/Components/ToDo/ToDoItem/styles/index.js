/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    infoContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    textContainer: {
        marginLeft: 15,
    },
    nameText: {
        fontSize: 18,
        marginBottom: 5,
    },
    categoryText: {
        color: '#58595B',
    },
    completedNameText: {
        color: 'gray',
    },
    buttonEdit: {
        borderColor: 'orange',
        borderWidth: 4,
        width: 60,
        backgroundColor: 'orange',
    },
    buttonDelete: {
        borderColor: 'red',
        borderWidth: 4,
        width: 60,
        backgroundColor: 'red',
    }
});

export default styles;