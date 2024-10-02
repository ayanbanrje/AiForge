// src/components/commonComponents/Button/Button.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.styles'; // Import styles from button.style.js

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
