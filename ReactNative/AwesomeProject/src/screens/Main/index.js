/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import ToDoList from '../../components/ToDoList';

const Main = () => {
  return <View>
      <Text>
          <ToDoList />
      </Text>
  </View>;
};

export default Main;
