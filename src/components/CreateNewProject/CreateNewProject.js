// src/components/CreateNewProject.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreateNewProject = () => {
    return (
        <View style={styles.container}>
            <Text>Create New Project Component</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CreateNewProject;
