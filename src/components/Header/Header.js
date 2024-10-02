import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Colors from '../../../assets/constant/colors';

const { width } = Dimensions.get('window'); // Get the device's width

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Image source={require("../../assets/images/supergraphic.png")} style={styles.supergraphic} />
            <View style={styles.content}>
                <View style={styles.leftSideContent}>
                    <Image
                        source={require("../../assets/images/Bosch_COLOR_RGB.png")}
                        style={styles.logo}
                    />
                    <View style={styles.separator} />
                    <Text style={styles.textBlueBold}>Genasis</Text>
                </View>
                <View style={styles.leftSideContent}>
                    <Image
                        source={require("../../../assets/images/question-frame.png")}
                        style={styles.icon} // Ensure images are responsive
                    />
                    <Text style={styles.textBlackNormal}>Help</Text>
                    <Image
                        source={require("../../../assets/images/my-brand-frame.png")}
                        style={styles.icon} // Ensure images are responsive
                    />
                    <Text style={styles.textBlackNormal}>Sanjeev Sayani</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        overflow:'hidden',
        flexDirection: "column",
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: width * 0.01, // 8% of screen width
        paddingVertical: width * 0.005, // 2% of screen width
    },
    separator: {
        marginHorizontal: width * 0.01,
        width: 2, // Height of the horizontal bar
        height: 20,
        backgroundColor: 'gray',
    },
    leftSideContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    textBlueBold: {
        fontSize: width>786?24:20,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    textBlackNormal:{
        fontSize: width>786?18:12,
        fontFamily:"BoschSans",
        // fontWeight: 'bold',
        color: 'black',
        marginHorizontal: width * 0.01,
    },
    logo: {
        alignItems: 'left',
        
    },
    icon: {
        width: width>786?30:30, // Adjust size as necessary
        width: width>786?30:30, // Adjust size as necessary
    },
    supergraphic: {
        width: '100%', // Ensure full width for the supergraphic
        
    }
});

export default Header;
