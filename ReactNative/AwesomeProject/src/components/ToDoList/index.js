/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import TodoItem from '../ToDoItem';

const todoData = [
    {
        id: '1',
        name: 'Task 1',
        category: 'Finance',
    },
    {
        id: '2',
        name: 'Task 2',
        category: 'Hobbie',
    },
    {
        id: '3',
        name: 'Task 3',
        category: 'Work',
    },
    {
        id: '4',
        name: 'Task 4',
        category: 'Study',
    },
];

const ToDoList = () => {
    const renderItem = ({ item }) => (
        <TodoItem name={item.name} category={item.category}/>
    );

    return (
        <View>
            <FlatList data={todoData} renderItem={renderItem} keyExtractor={item => item.id} />
        </View>
    );
};

export default ToDoList;