/* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList } from 'react-native';
import ToDoItem from '../ToDoItem';



const ToDoList = ({ todoData, onChangeTodo, todoCategories, onDeleteTodo }) => {
    const renderItem = ({ item }) => (
        <ToDoItem
            id={item.id}
            name={item.name}
            category={item.category}
            onChangeTodo={onChangeTodo}
            isCompleted={item.isCompleted}
            todoCategories={todoCategories}
            onDeleteTodo={onDeleteTodo}
        />
    );
    return (
        <View>
            <FlatList
                data={todoData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} />
        </View>
    );
};

export default ToDoList;