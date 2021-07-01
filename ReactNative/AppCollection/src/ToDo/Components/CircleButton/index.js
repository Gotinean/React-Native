/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, TextInput, Button } from 'react-native';
import styles from './styles';

const CircleButton = ({ add }) => {
    const [value, setValue] = useState('');
    
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Enter your task here..."
            />
            <Button
                title="Add Task"
                style={styles.button}
                onPress={()=>{if(value){
                    add(value);
                    setValue('');
                    }else{}
                }
                    }
            />
        </View>
    );
};

export default CircleButton;