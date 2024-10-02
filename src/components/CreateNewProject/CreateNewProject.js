// src/components/CreateNewProject.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../../assets/constant/colors';
import globalStyles from '../../../globalStyle';
const CreateNewProject = () => {
    return (
        <View style={styles.container}>
            <Text style={globalStyles.fz_16_bold}>Create New Project Component</Text>
            <Text style={[globalStyles.fz_16, { paddingVertical: 10 }]}>Create your new project to help with your work , with the exclusive technology to progress in your day to day life. </Text>
            <View style={styles.cardContainer}>
                <View style={styles.cardInital}>
                    <Image
                        source={require("../../../assets/images/add-frame.png")}
                    />
                    <Text style={globalStyles.fz_16}>Create New</Text>
                    <Text style={globalStyles.fz_16}>Blank Project</Text>
                </View>
                <View style={styles.card}>
                    <Image
                        source={require("../../../assets/images/flowchart.png")}
                        style={styles.cardImage}
                        resizeMode="stretch"  // This will stretch the image to fill the container
                    />
                    <View style={styles.textContainer}>
                        <Text style={globalStyles.fz_16_bold}>Ai Algorithm</Text>
                        <Text style={globalStyles.fz_12}>To cancel noise in signal</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image
                        source={require("../../../assets/images/flowchart.png")}
                        style={styles.cardImage}
                        resizeMode="stretch"  // This will stretch the image to fill the container
                    />
                    <View style={styles.textContainer}>
                        <Text style={globalStyles.fz_16_bold}>Sorting Algorithm</Text>
                        <Text style={globalStyles.fz_12}>Arrange Data Efficiently</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image
                        source={require("../../../assets/images/flowchart.png")}
                        style={styles.cardImage}
                        resizeMode="stretch"  // This will stretch the image to fill the container
                    />
                    <View style={styles.textContainer}>
                        <Text style={globalStyles.fz_16_bold}>Search Algorithm</Text>
                        <Text style={globalStyles.fz_12}>Locate Information Quicklyl</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image
                        source={require("../../../assets/images/flowchart.png")}
                        style={styles.cardImage}
                        resizeMode="stretch"  // This will stretch the image to fill the container
                    />
                    <View style={styles.textContainer}>
                        <Text style={globalStyles.fz_16_bold}>Graph Algorithm</Text>
                        <Text style={globalStyles.fz_12}>Analyze Network Structures</Text>
                    </View>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: 16
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    cardContainer: {
        flexDirection: 'row'
    },
    cardInital: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderRadius: 1,
        borderColor: "gray",
        borderStyle: 'dashed',
        padding: 20,
        backgroundColor: '#fff',
        borderColor: '#ddd',   // Border color
        shadowColor: '#000',   // Optional: shadow for a card-like effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        marginLeft: 25,
        width: 200,
        height: 200,  // Fixed height for the card
        borderWidth: 2,
        borderRadius: 1,
        borderColor: Colors.lightGray,
        backgroundColor: Colors.lightGray,
        // shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        flexDirection: 'column',  // Stack the image and text vertically
        overflow: 'hidden',
    },
    cardImage: {
        height: '70%',  // Image takes up 80% of the card's height
        width: '100%',  // Ensures the image fills the width of the card
    },
    textContainer: {
        height: '30%',  // Text container takes up the remaining 20%
        padding: 10,
        backgroundColor: '#fff',
        borderColor:Colors.lightGray,
        borderTopWidth:2,
        justifyContent:'space-between'
    },
});

export default CreateNewProject;
