// src/components/ModuleExtension.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ModuleExtension = () => {
    return (
        <View style={styles.container}>
            <Text>Module Extension Component</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ModuleExtension;
