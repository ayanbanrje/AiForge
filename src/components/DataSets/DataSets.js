// src/components/DataSets.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DataSets = () => {
    return (
        <View style={styles.container}>
            <Text>Data Sets Component</Text>
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

export default DataSets;
