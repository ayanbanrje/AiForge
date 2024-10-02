// src/components/Menu.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
    //console.log(navigation)
    const navigation = useNavigation();
    const menuItems = [
        { title: 'Create New Project', route: 'CreateNewProject' },
        { title: 'Module Extension', route: 'ModuleExtension' },
        { title: 'Node Configuration', route: 'NodeConfiguration' },
        { title: 'Data Sets', route: 'DataSets' },
        { title: 'Market Place', route: 'MarketPlace' },
    ];

    return (
            <View style={styles.menuContainer}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.menuItem}
                        onPress={() => navigation.navigate(item.route)}
                    >
                        <Text style={styles.menuText}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
    );
};


const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row', // Arrange items in a row
        justifyContent: 'space-around', // Space items evenly
        padding: 20,
        flexWrap: 'wrap', // Allows items to wrap to the next line if there's not enough space
    },
    menuItem: {
        padding: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginHorizontal: 5, // Add horizontal margin for spacing
        marginVertical: 5, // Optional vertical margin
    },
    menuText: {
        fontSize: 16,
    },
});

export default Menu;
