// src/components/MarketPlace.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MarketPlace = () => {
    return (
        <View style={styles.container}>
            <Text>Market Place Component</Text>
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

export default MarketPlace;
