// src/App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';  // Import the separated AppNavigator
import Menu from './src/components/Menu';  // Menu is always visible

import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Menu will always be displayed */}


      {/* Navigation system */}
      <NavigationContainer>
        <Header title="My App" />
        <Menu />
        <AppNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 50,  // Add padding if needed for space above menu
  },
});
