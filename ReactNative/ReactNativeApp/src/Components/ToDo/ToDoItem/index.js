/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import { todoProps } from '../../../Constance/todo';


const ToDoItem = ({
    id,
    name,
    category,
    onChangeTodo,
    isCompleted,
    todoCategories,
    onDeleteTodo,
}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(isCompleted);
    const [isEditable, setIsEditable] = useState(false);

    const onChange = (key, value) => {
        if (key === todoProps.isCompleted) {
            setToggleCheckBox(value);
        }
        onChangeTodo({ key, value, id });
    };

    const renderPickerItems = () =>
        Object.keys(todoCategories).map((key) => (
            <Picker.Item label={todoCategories[key]} value={todoCategories[key]} />
        ));
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(value) => onChange(todoProps.isCompleted, value)}
                />
                <View style={styles.textContainer}>
                    {isEditable ? (
                        <TextInput
                            onChangeText={(value) => onChange(todoProps.name, value)}
                            defaultValue={name}
                            style={styles.nameText}
                        />
                    ) : (
                        <Text style={[styles.nameText, isCompleted ? styles.completedNameText : null]}>{name}</Text>
                    )}
                    {isCompleted ? null : (isEditable ? (
                        <Picker
                            selectedValue={category}
                            onValueChange={(value) => onChange(todoProps.category, value)}>
                            {renderPickerItems()}
                        </Picker>
                    ) : (
                        <Text>{category}</Text>
                    ))}
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => setIsEditable(!isEditable)} style={styles.buttonEdit}>
                    <Text>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDeleteTodo({ id })} style={styles.buttonDelete}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ToDoItem;