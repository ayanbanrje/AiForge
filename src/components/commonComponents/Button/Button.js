// src/components/commonComponents/Button/Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007BC0',
        padding: 10,
        //textAlign: "left",
        font: "normal normal normal 16px/18px Bosch Sans",
        letterSpacing: "0px",
        opacity: 1
    },
    buttonText: {
        color: "#ffffff",
        textAlign: 'center',
    },
});

export default Button;
