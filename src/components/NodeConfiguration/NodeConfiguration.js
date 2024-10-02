// src/components/NodeConfiguration.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NodeConfiguration = () => {
    return (
        <View style={styles.container}>
            <Text>Node Configuration Component</Text>
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

export default NodeConfiguration;
