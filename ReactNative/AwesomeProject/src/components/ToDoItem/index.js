/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles/intex';

const TodoItem = ({ name, category }) => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Do you like React Native?</Text>
            </View>
            <View>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.categoryText}>{category}</Text>
            </View>
        </View>
    );
};

export default TodoItem;