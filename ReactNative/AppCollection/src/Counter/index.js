/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';


const Counter = () => {
    const [state, setState] = useState(0)
    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.title}>{state}</Text>
            </View>
            <View style={styles.fixToText}>
             <Button
                title='-'
                onPress={() => {setState(state - 1)}}
             />
             </View>
             <View style={styles.fixToText}>
             <Button
                title='+'
                onPress={() => {setState(state + 1)}}
             />
             </View>
        </View>
    )
};

export default Counter;