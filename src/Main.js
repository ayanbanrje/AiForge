// src/App.js
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator'; // Your navigator
import { Button } from './components/commonComponents';

const Main = () => {
    return (
        // <NavigationContainer>
        //     <AppNavigator />
        // </NavigationContainer>
        <View>
            <Text>Hello, this is content from main.js!ffffffffffffffffffffff</Text>
            <Button 
                title="Submit"
                onPress={()=> console.log("Pressed") }
                />
        </View>
            
    );
};

export default Main;
