/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Main = () => {
    return (
        <View style={styles.container}>
            <Text style={{textAlign: 'center', fontSize: 50}}>Hello To My AppCollection</Text>
        </View>
    );
};

export default Main;