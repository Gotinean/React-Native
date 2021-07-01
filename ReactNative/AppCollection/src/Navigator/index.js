/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import Counter from '../Counter';
import Gallery from '../Gallery';
import Main from '../Main';
import Notepad from '../Notepad';
import ToDo from '../ToDo';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Main} />
            <Tab.Screen name='Counter' component={Counter} />
            <Tab.Screen name='Gallery' component={Gallery} />
            <Tab.Screen name='Notepad' component={Notepad} />
            <Tab.Screen name='ToDo' component={ToDo} /> 
        </Tab.Navigator>
    );
};

export default Tabs