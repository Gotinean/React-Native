/* eslint-disable prettier/prettier */
import { todoProps } from './todo';

export const categoriesData = {
    finance: 'finance',
    wishList: 'wishList',
    weekend: 'weekend',
    work: 'work',

};

export const initialTodoData = [
    {
        [todoProps.id]: '1',
        [todoProps.isCompleted]: false,
        [todoProps.name]: 'Task1',
        [todoProps.category]: 'finance',
    },
    {
        [todoProps.id]: '2',
        [todoProps.isCompleted]: true,
        [todoProps.name]: 'Task2',
        [todoProps.category]: 'weekend',
    },
    {
        [todoProps.id]: '3',
        [todoProps.isCompleted]: false,
        [todoProps.name]: 'Task3',
        [todoProps.category]: 'work',
    },
    {
        [todoProps.id]: '4',
        [todoProps.isCompleted]: true,
        [todoProps.name]: 'Task4',
        [todoProps.category]: 'wishList',
    },
    {
        [todoProps.id]: '5',
        [todoProps.isCompleted]: false,
        [todoProps.name]: 'Task5',
        [todoProps.category]: 'work',
    },
];