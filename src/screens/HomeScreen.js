import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import globalStyles from '../../globalStyle';
import Colors from '../../assets/constant/colors';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require("../../assets/images/background.png")} // Replace with your image path
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <View style={styles.container1}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, }}>
                        <Text style={[globalStyles.fz_24, globalStyles.c_white]}>Hello Sanjeev,</Text>
                        <Text style={[globalStyles.fz_12, { color: Colors.white }]}>Last login: 2024/02/10 10:52 am</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <Text style={[globalStyles.fz_34, globalStyles.c_white]}>Welcome to </Text>
                        <Text style={[globalStyles.fz_34, globalStyles.c_white, globalStyles.fw_bold]}>GenasisNxt AI Forge</Text>
                    </View>
                    <Text style={[globalStyles.fz_16, globalStyles.c_white, { marginBottom: 20 }]}>
                        Improve IT executive professional standing with resources, community, personalized learning, and data-driven insights.
                        Our machine learning company specializes in developing cutting-edge AI models that drive innovation and efficiency across various industries. We harness the power of data to deliver tailored solutions that enhance decision-making and optimize processes.
                    </Text>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Know More</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { marginLeft: 20 }]}>
                            <Text style={styles.buttonText}>View Recent Projects</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={styles.cardContainer}>
                        {/* Example of Card Items */}
                        {renderCardItem("CreateNewProject", "Create New Project", "Start a new project by uploading your dataset and streamline your data cleaning process.", require("../../assets/images/document-add.png"))}
                        {renderCardItem("ModuleExtension", "Module Extension", "Add custom algorithms to enhance your data processing capabilities for tailored solutions.", require("../../assets/images/ccu-cm.png"))}
                        {renderCardItem('NodeConfiguration', "Node Configuration", "Optimize your data pipeline with flexible node settings for efficient machine learning workflows.", require("../../assets/images/connectivity.png"))}
                        {renderCardItem('DataSets', "Data Sets", "Access a library of pre-processed datasets to kickstart your machine learning projects.", require("../../assets/images/core-data.png"))}
                        {renderCardItem('MarketPlace', "Market Place", "Explore resources in our marketplace for premium datasets and advanced training modules.", require("../../assets/images/Group 303977.png"))}
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

// Function to render card items
const renderCardItem = (route, title, description, imagepath) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(route)}>
        <Image source={imagepath} style={{ marginBottom: 5 }} />
        <Text style={[globalStyles.fz_16, globalStyles.c_white, { marginBottom: 5 }]}>{title}</Text>
        <Text style={[globalStyles.fz_12, globalStyles.c_white, { marginBottom: 5 }]}>{description}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%'
    },
    container: {
        flex: 10,
    },
    container1: {
        flex: 5,
        marginTop: 20,
        padding: 20,

    },
    container2: {
        flex: 5
    },
    greetingText: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 10,
    },
    welcomeText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    descriptionText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20,
    },
    button: {
        width: 200,
        backgroundColor: Colors.blue, // Button color
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    cardContainer: {
        flexDirection: 'row', // Set to row for horizontal alignment
        justifyContent: 'space-between', // Space cards evenly
        alignItems: 'flex-start', // Align cards to the start vertically
        height: '900',
        width: '100%',
        backgroundColor: 'rgba(139, 34, 132, 0.34)',
    },
    card: {
        height: '100%',
        flex: 1,
        flexDirection: 'column', // Vertical alignment within the card
        borderRadius: 10,
        padding: 15,
        margin: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    cardDescription: {
        fontSize: 14,
        color: 'white'
    },
});

export default HomeScreen;
