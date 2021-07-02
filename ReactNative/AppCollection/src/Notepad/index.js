/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import styles from './styles';
import Note from './components/Note';

const Notepad = () => {
    const [note, setNote] = useState();
    const [noteItems, setNoteItems] = useState([]);

    const handleAddNote = () => {
        if(note){
        Keyboard.dismiss();
        setNoteItems([...noteItems, note])
        setNote(null);
        }
        else{}
    }

    const completeNote = (index) => {
        let itemsCopy = [...noteItems];
        itemsCopy.splice(index, 1);
        setNoteItems(itemsCopy);
    }

    return (
        <View style={styles.container}>
            <View style={styles.styleWrapper}>
                <Text style={styles.sectionTitle}>Notes</Text>
            </View>
            <View style={styles.items}>
                {
                    noteItems.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => completeNote()}>
                                <Note text={item} />
                            </TouchableOpacity>

                        )
                    })
                }
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? 'padding' : 'height'}
                style={styles.writeTaskWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder={'Write a Note'}
                    onChangeText={text => setNote(text)}
                    value={note}
                ></TextInput>
                <TouchableOpacity onPress={() => handleAddNote()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
};

export default Notepad;