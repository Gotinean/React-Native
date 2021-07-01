/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import Note from './components/Note';

const Notepad = () => {
    return (
        <View style={styles.container}>
            <View style={styles.styleWrapper}>
                <Text style={styles.sectionTitle}>Notes</Text>
            </View>
            <View style={styles.items}>
                <Note text={'Note1'}/>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? 'padding' : 'height'}
                style={styles.writeTaskWrapper}>
                    <TextInput style={styles.input} placeholder='Write a Note'></TextInput>
                    <TouchableOpacity>
                        <View style={styles.addWrapper}>
                            <Text>2:25</Text>
                        </View>
                    </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
};

export default Notepad;