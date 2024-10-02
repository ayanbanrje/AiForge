// src/components/Header/Header.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../../assets/constant/colors';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            {<Image
                source={require("../../assets/images/supergraphic.png")}
            />}
            <View style={styles.content}>
                <View style={styles.leftSideContent}>
                    {<Image
                        source={require("../../assets/images/Bosch_COLOR_RGB.png")}
                        style={styles.logo}
                    />}
                    <View style={styles.separator} />

                    <Text style={styles.textBlueBold}>Genasis</Text>
                </View>
                <View style={styles.leftSideContent}>
                    {<Image
                        source={require("../../../assets/images/question-frame.png")}
                    />}
                    <Text style={styles.textBlackNormal}>Help</Text>
                    {<Image
                        source={require("../../../assets/images/my-brand-frame.png")}
                    />}
                    <Text style={styles.textBlackNormal}>Sanjeev Sayani</Text>

                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "column",
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 32,
        paddingVertical: 8
    },
    separator: {
        marginHorizontal: 16,
        width: 2, // Height of the horizontal bar
        height: 20, // Full width of the container
        backgroundColor: 'gray', // Color of the separator
        // marginVertical: 10, /
    },
    leftSideContent: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    textBlueBold: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    textBlackNormal:{
        fontSize: 16,
        fontFamily:"BoschSans",
        // fontWeight: 'bold',
        color: 'black',
        marginHorizontal:16
    },
    logo: {
        alignItems: 'left',
    }
});

export default Header;
