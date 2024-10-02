// src/App.js
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator'; // Your navigator
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';


const Main = () => {
    return (
        <>
            <Header title="App Header" />
                <NavigationContainer>
                    <AppNavigator />
                </NavigationContainer>
            <Footer/>
        </>
            
    );
};

export default Main;
