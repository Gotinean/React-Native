/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View } from 'react-native';
import CircleButton from '../../Components/ToDo/CircleButton';
import styles from './styles';
import TodoBlock from '../../Components/ToDo/TodoBlock';
import {todoProps} from '../../Constance/todo';
import { categoriesData, initialTodoData } from '../../Constance/todoStructure';


const generateId = () => Math.floor(Math.random() * Math.floor(1000));

const initialTask = {
    [todoProps.id]: null,
    [todoProps.name]: 'NewTask',
    [todoProps.category]: null,
    [todoProps.isCompleted]: false,
};

const Main = () => {
    const [todoData, setTodoData] = useState(initialTodoData);
    const addNewTask = () => {
        setTodoData([
            ...todoData,
            {
                ...initialTask,
                [todoProps.id]: generateId().toString(),
            },
        ]);
    };

    const deleteTask = ({id}) => {
        const newTodoData = todoData.filter((item) => item.id !== id)
        setTodoData(newTodoData);
    };
    const filterTodoData = ({ data, status }) =>
        data.filter((item) => item.isCompleted === status);

    const onChangeTask = ({key, value, id }) => {
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
            <TodoBlock
                todoData={filterTodoData({ data: todoData, status: false })}
                title={'Incompleted Tasks'} onChangeTodo={onChangeTask} todoCategories={categoriesData} onDeleteTodo={deleteTask}
            />
            <TodoBlock
                todoData={filterTodoData({ data: todoData, status: true })}
                title={'Completed Tasks'} onChangeTodo={onChangeTask} todoCategories={categoriesData} onDeleteTodo={deleteTask}
            />
            <CircleButton add={addNewTask} />
        </View>
    );
};

export default Main;