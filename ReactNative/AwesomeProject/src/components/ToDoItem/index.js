/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles/intex';

const TodoItem = ({ name, category }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.categoryText}>{category}</Text>
            </View>
        </View>
    );
};

export default TodoItem;