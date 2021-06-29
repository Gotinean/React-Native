/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const CircleButton = ({add}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={()=>add()}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
    );
};

export default CircleButton;