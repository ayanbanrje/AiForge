import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../assets/constant/colors';

const Menu = () => {
    const navigation = useNavigation();
    const [activeItem, setActiveItem] = useState("CreateNewProject"); // State to track active menu item

    const menuItems = [
        { title: 'Create New Project', route: 'CreateNewProject' },
        { title: 'Module Extension', route: 'ModuleExtension' },
        { title: 'Node Configuration', route: 'NodeConfiguration' },
        { title: 'Data Sets', route: 'DataSets' },
        { title: 'Market Place', route: 'MarketPlace' },
    ];

    const handlePress = (item) => {
        setActiveItem(item.route); // Set the active item on press
        navigation.navigate(item.route);
    };

    return (
        <View style={styles.menuContainer}>
            {menuItems.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.menuItem}
                    onPress={() => handlePress(item)}
                >
                    <Text style={[styles.menuText, activeItem === item.route && styles.activeMenuText]}>
                        {item.title}
                    </Text>
                    <View style={[styles.bar, activeItem === item.route && styles.activeBar]}></View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    menuItem: {
        // borderRadius: 5,
        marginHorizontal: 10,
        // marginTop: 5,
    },
    menuText: {
        marginHorizontal:10,
        marginVertical:5,
        fontSize: 16,
        color: 'black', // Default text color
    },
    activeMenuText: {
        color:Colors.textBlue ,
    },
    activeBar:{
        backgroundColor:Colors.textBlue ,// Active text color
    },
    bar: {
        // marginHorizontal: width * 0.01,
        width: "100%", // Height of the horizontal bar
        height: 2,
        backgroundColor: "none",
    },
});

export default Menu;
