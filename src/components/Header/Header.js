// src/components/Header/Header.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            {<Image
                source={ require("../../assets/images/supergraphic.png") }
            /> }
            {<Image 
                source={ require("../../assets/images/Bosch_COLOR_RGB.png") }
                style={styles.logo}
            /> }
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    logo : {
        alignItems: 'left',
    }
});

export default Header;
