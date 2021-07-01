/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CircleButton from './Components/CircleButton';
import styles from './styles';
import TodoBlock from './Components/TodoBlock';
import { todoProps } from './Constance/todo';
import { categoriesData, initialTodoData } from './Constance/todoStructure';


const generateId = () => Math.floor(Math.random() * Math.floor(1000));

const initialTask = {
    [todoProps.id]: null,
    [todoProps.name]: 'NewTask',
    [todoProps.category]: 'business',
    [todoProps.isCompleted]: false,
};

const ToDo = () => {
    const [todoData, setTodoData] = useState(initialTodoData);
    const addNewTask = (value) => {
        setTodoData([
            ...todoData,
            {
                ...initialTask,
                [todoProps.id]: generateId().toString(),
                [todoProps.name]: value,
            },
        ]);
    };

    const deleteTask = ({ id }) => {
        const newTodoData = todoData.filter((item) => item.id !== id)
        setTodoData(newTodoData);
    };
    const filterTodoData = ({ data, status }) =>
        data.filter((item) => item.isCompleted === status);

    const onChangeTask = ({ key, value, id }) => {
        const newTodoData = todoData.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    [key]: value,
                };
            }
            else { return item; }
        });
        setTodoData(newTodoData);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.head}> To Do App</Text>
            <CircleButton key={generateId()} add={(value) => addNewTask(value)}
                style={{ flex: 1, backgroundColor: 'skyblue' }} />
            <ScrollView>
                <TodoBlock
                    todoData={filterTodoData({ data: todoData, status: false })}
                    title={'Incompleted Tasks'} onChangeTodo={onChangeTask} todoCategories={categoriesData} onDeleteTodo={deleteTask}
                    style={{ flex: 3, backgroundColor: 'darkorange' }}
                />
                <TodoBlock
                    todoData={filterTodoData({ data: todoData, status: true })}
                    title={'Completed Tasks'} onChangeTodo={onChangeTask} todoCategories={categoriesData} onDeleteTodo={deleteTask}
                    style={{ flex: 3, backgroundColor: 'skyblue' }}
                />
            </ScrollView>
        </View>
    );
};

export default ToDo;