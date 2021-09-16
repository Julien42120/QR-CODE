import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import History from './History';
import Decode from './Decode';
import Encode from './Encode';
import { Entypo } from '@expo/vector-icons';
import store from "./store/index";
import { Provider } from "react-redux";

const Tab = createBottomTabNavigator();

export default function App(selectHistory) {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>

          <Tab.Screen
            name="Decode"
            component={Decode}
            options={{
              tabBarLabel: 'Decode',
              tabBarIcon: ({ color }) => (
                <Entypo name="arrow-with-circle-down" size={24} color="black" />
              ),
            }} />
          <Tab.Screen
            name="Encode"
            component={Encode}
            options={{
              tabBarLabel: 'Encode',
              tabBarIcon: ({ color }) => (
                <Entypo name="arrow-with-circle-up" size={24} color="black" />
              ),
            }} />
          <Tab.Screen
            name="History"
            component={History}
            options={{
              tabBarLabel: 'History',
              tabBarIcon: ({ color }) => (
                <Entypo name="open-book" size={24} color="black" />
              ),
            }} />

        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}