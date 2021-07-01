/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/Navigator';
import { View, Text } from 'react-native';

export default function App() {
  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>    
  );
}