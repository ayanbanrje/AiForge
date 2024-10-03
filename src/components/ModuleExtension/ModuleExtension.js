// src/components/ModuleExtension.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Image  } from 'react-native';

const ModuleExtension = () => {
    const MENUDATA = [
        {
          id: '1',
          title: 'Create your Custom Source',
        },
        {
          id: '2',
          title: 'Create your Custom Algorithm',
        },
        {
          id: '3',
          title: 'Create your Custom Sink',
        },
        {
            id: '4',
            title: 'Create your Custom Accumulator',
        },
    ];
    const Item = ({title}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Module Extension</Text>
            <Text>
                Expand your machine learning project by creating custom modules designed to fit your workflow. Easily set up custom sources, sinks, algorithms, and accumulators to enhance data processing and analysisThis flexible extension allows you to integrate unique functionalities, ensuring your project is equipped to handle specific requirements and maximize performance.
            </Text>
            <View style={styles.Row}>
                <View style={styles.Col_3}>
                    <FlatList
                        data={MENUDATA}
                        renderItem={({item}) => 
                            <View>
                                <TouchableOpacity style={styles.MenuButton} activeOpacity={0.7}>
                                    <Image style={{ width: 20, height: 20 }}
                                        source={require("../../../assets/images/menu-icon1.svg")}
                                    />
                                    <Text style={styles.TextGrey}>{item.title}</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={styles.Col_9}>
                    <View style={styles.SearchWrap}>
                        <View style={{width: '60%'}}>
                            <TextInput
                                style={styles.Search}
                                placeholder="Available Custom Source"
                                placeholderTextColor="#000"
                            />
                            <TouchableOpacity style={styles.SearchButton} activeOpacity={0.7}>
                                <Image
                                    source={require("../../../assets/images/search-icon.svg")}
                                    style={styles.SearchIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '40%'}}>
                            <TouchableOpacity style={styles.CreateButton} activeOpacity={0.7}>
                                <Image
                                    source={require("../../../assets/images/plus-icon.svg")}
                                    style={styles.PlusIcon}
                                />
                                <Text style={styles.TextWhite}>Create Custom Source</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.CardList}>
                        <View style={styles.CardBox}>
                            <View style={styles.CardHeader}>
                                <View>
                                    <Text style={styles.CardTitle}>Data Ingestion Hub</Text>
                                </View>
                                <View style={styles.CardAction}>
                                    <TouchableOpacity style={styles.ActiionButton} activeOpacity={0.7}>
                                        <Image
                                            source={require("../../../assets/images/edit-icon.svg")}
                                            style={styles.PlusIcon}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.ActiionButton} activeOpacity={0.7}>
                                        <Image
                                            source={require("../../../assets/images/delete-icon.svg")}
                                            style={styles.PlusIcon}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.CardBody}>
                                <Text style={styles.BodyText}>
                                    Easily define and manage various data sources for your machine learning projects.
                                </Text>
                                <View style={styles.LabelList}>
                                    <Text style={styles.Label}>Database</Text>
                                    <Text style={styles.Label}>CSV</Text>
                                    <Text style={styles.Label}>Data</Text>
                                    <Text style={styles.Label}>+3</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.CardBox}>
                            <View style={styles.CardHeader}>
                                <View>
                                    <Text style={styles.CardTitle}>Data Ingestion Hub</Text>
                                </View>
                                <View style={styles.CardAction}>
                                    <TouchableOpacity style={styles.ActiionButton} activeOpacity={0.7}>
                                        <Image
                                            source={require("../../../assets/images/edit-icon.svg")}
                                            style={styles.PlusIcon}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.ActiionButton} activeOpacity={0.7}>
                                        <Image
                                            source={require("../../../assets/images/delete-icon.svg")}
                                            style={styles.PlusIcon}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.CardBody}>
                                <Text style={styles.BodyText}>
                                    Easily define and manage various data sources for your machine learning projects.
                                </Text>
                                <View style={styles.LabelList}>
                                    <Text style={styles.Label}>Database</Text>
                                    <Text style={styles.Label}>CSV</Text>
                                    <Text style={styles.Label}>Data</Text>
                                    <Text style={styles.Label}>+3</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.CardBox}>
                            <View style={styles.CardHeader}>
                                <View>
                                    <Text style={styles.CardTitle}>Data Ingestion Hub</Text>
                                </View>
                                <View style={styles.CardAction}>
                                    <TouchableOpacity style={styles.ActiionButton} activeOpacity={0.7}>
                                        <Image
                                            source={require("../../../assets/images/edit-icon.svg")}
                                            style={styles.PlusIcon}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.ActiionButton} activeOpacity={0.7}>
                                        <Image
                                            source={require("../../../assets/images/delete-icon.svg")}
                                            style={styles.PlusIcon}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.CardBody}>
                                <Text style={styles.BodyText}>
                                    Easily define and manage various data sources for your machine learning projects.
                                </Text>
                                <View style={styles.LabelList}>
                                    <Text style={styles.Label}>Database</Text>
                                    <Text style={styles.Label}>CSV</Text>
                                    <Text style={styles.Label}>Data</Text>
                                    <Text style={styles.Label}>+3</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    heading:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    Row: {
        flexDirection: 'row',
        marginTop: 15,
    },
    Col_3:{
        width: '30%',
    },
    Col_9:{
        width: '70%',
    },
    mt_5:{
        marginTop: 15,
    },
    MenuButton:{
        backgroundColor: '#f4f8ef',
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginVertical: 1,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        shadowColor: '#ccc',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    TextGrey:{
        color: '#6d6d6d',
    },
    SearchWrap:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    CreateButton:{
        backgroundColor: '#007bbf',
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
    },
    TextWhite:{
        color: '#fff',
    },
    Search: {
        height: 52,
        backgroundColor: '#f4f8ef',
        paddingLeft: 10,
        paddingRight: 50,
        fontSize: 16,
        color: '#222',
    },
    SearchButton:{
        position: 'absolute',
        top: 10,
        right: 20,
    },
    SearchIcon: {
        width: 30,
        height: 30,
    },
    PlusIcon:{
        width: 20,
        height: 20,
    },
    CardList:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    CardBox:{
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#fff',
        flex: 1,
        margin: 5,
        justifyContent: 'center', 
    },
    CardHeader:{
        flexDirection: 'row',
        gap:  10,
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    CardTitle:{
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    CardAction:{
        flexDirection: 'row',
        gap: 10,
        paddingLeft: 10,
        paddingRight: 2,
        paddingVertical: 2,
    },
    CardBody:{

    },
    BodyText:{
        fontSize: 14,
    },
    LabelList:{
        flexDirection: 'row',
        gap: 5,
    },
    Label:{
        backgroundColor: '#eee',
        color: '#000',
        paddingHorizontal: 10,
        paddingVertical: 2,
        textAlign: 'center',
        borderRadius: 30,
        fontSize: 14,
        marginTop: 10,
    },
});

export default ModuleExtension;
