// src/components/CommonLayout.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const CommonLayout = ({ children }) => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                {children}
            </View>
            <Footer />
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
