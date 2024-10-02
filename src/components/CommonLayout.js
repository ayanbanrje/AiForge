// src/components/CommonLayout.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const CommonLayout = ({ children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {children}
            </View>
   
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 10,
    },
});

export default CommonLayout;
