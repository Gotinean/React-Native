/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import ToDoList from '../ToDoList';
import styles from './styles';


const TodoBlock = ({ todoData, title, onChangeTodo, todoCategories, onDeleteTodo }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.head}>{title}</Text>
            <ToDoList
                todoData={todoData}
                onChangeTodo={onChangeTodo}
                todoCategories={todoCategories}
                onDeleteTodo={onDeleteTodo}
            />
        </View>
    );
};

export default TodoBlock;