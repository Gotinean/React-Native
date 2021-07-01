/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Counter from '../Counter';
import Gallery from '../Gallery';
import Main from '../Main';
import Notepad from '../Notepad';
import ToDo from '../ToDo';
import styles from '../ToDo/Components/CircleButton/styles';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 5,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    height: 60,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="Home" component={Main} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image
                            source={require('../../asserts/icons/bulb.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Main</Text>
                    </View>
                )
            }} />
            <Tab.Screen name='Counter' component={Counter} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image
                            source={require('../../asserts/icons/document.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Counter</Text>
                    </View>
                )
            }} />
            <Tab.Screen name='Gallery' component={Gallery} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image
                            source={require('../../asserts/icons/idea.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Gallery</Text>
                    </View>
                )
            }} />
            <Tab.Screen name='Notepad' component={Notepad} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image
                            source={require('../../asserts/icons/laptop.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Notepad</Text>
                    </View>
                )
            }} />
            <Tab.Screen name='ToDo' component={ToDo} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image
                            source={require('../../asserts/icons/pencil.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>ToDo</Text>
                    </View>
                )
            }} />
        </Tab.Navigator>
    );
};

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default Tabs