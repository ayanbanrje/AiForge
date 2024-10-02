// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateNewProject from '../components/CreateNewProject/CreateNewProject';
import ModuleExtension from '../components/ModuleExtension/ModuleExtension';
import NodeConfiguration from '../components/NodeConfiguration/NodeConfiguration';
import DataSets from '../components/DataSets/DataSets';
import MarketPlace from '../components/MarketPlace/MarketPlace';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="CreateNewProject">
            <Stack.Screen name="CreateNewProject" component={CreateNewProject} options={{ headerShown: false }}  />
            <Stack.Screen name="ModuleExtension" component={ModuleExtension} options={{ headerShown: false }} />
            <Stack.Screen name="NodeConfiguration" component={NodeConfiguration} options={{ headerShown: false }} />
            <Stack.Screen name="DataSets" component={DataSets} options={{ headerShown: false }} />
            <Stack.Screen name="MarketPlace" component={MarketPlace} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
