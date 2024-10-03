// src/components/ModuleExtension.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Image } from 'react-native';

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
    const Item = ({ title }) => (
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
                <View style={styles.Col_12}>
                    <View style={styles.SearchWrap}>
                        <View style={{ width: '60%' }}>
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
                        <View style={{ width: '40%' }}>
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
                            <View style={styles.headerRow}>
                                <Text style={styles.nodeTitle}>Node 2</Text>
                                <TouchableOpacity style={styles.statusButton}>
                                    <Text style={styles.statusText}>Online</Text>
                                </TouchableOpacity>
                                <View style={styles.iconRow}>
                                    <TouchableOpacity style={styles.iconButton}>
                                        <Text>✏️</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconButton}>
                                        <Text>⬇️</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconButton}>
                                        <Text>🗑️</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.detailsRow}>
                                <View style={styles.detailsColumn}>
                                    <Text style={styles.label}>ID</Text>
                                    <Text style={styles.value}>0001</Text>
                                </View>
                                <View style={styles.detailsColumn}>
                                    <Text style={styles.label}>vCPU's</Text>
                                    <Text style={styles.value}>24</Text>
                                </View>
                                <View style={styles.detailsColumn}>
                                    <Text style={styles.label}>RAM</Text>
                                    <Text style={styles.value}>96GB</Text>
                                </View>
                            </View>

                            <View style={styles.detailsRow}>
                                <View style={styles.detailsColumn}>
                                    <Text style={styles.label}>GPU's</Text>
                                    <Text style={styles.value}>0001</Text>
                                </View>
                                <View style={styles.detailsColumn}>
                                    <Text style={styles.label}>SSD</Text>
                                    <Text style={styles.value}>24</Text>
                                </View>
                                <View style={styles.detailsColumn}>
                                    <Text style={styles.label}>No. of Containers</Text>
                                    <Text style={styles.value}>1</Text>
                                </View>
                            </View>

                            <View style={styles.detailsRow}>
                                <View style={styles.detailsColumn}>
                                    <Text style={styles.label}>No. of Pipeline</Text>
                                    <Text style={styles.value}>0001</Text>
                                </View>
                                <View style={styles.detailsColumn}>
                                    <Text style={styles.label}>Tags</Text>
                                    <View style={styles.tagsRow}>
                                        <View style={styles.LabelList}>
                                            <Text style={styles.Label}>Database</Text>
                                            <Text style={styles.Label}>CSV</Text>
                                            <Text style={styles.Label}>Data</Text>
                                            <Text style={styles.Label}>+3</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <TouchableOpacity style={styles.viewButton}>
                                <Text style={styles.viewButtonText}>VIEW</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.CardBox}>
                            <View style={styles.headerRow}>
                                <Text style={styles.nodeTitle}>Node 2</Text>
                                <TouchableOpacity style={styles.statusButton}>
                                    <Text style={styles.statusText}>Online</Text>
                                </TouchableOpacity>
                                <View style={styles.iconRow}>
                                    <TouchableOpacity style={styles.iconButton}>
                                        <Text>✏️</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconButton}>
                                        <Text>⬇️</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconButton}>
                                        <Text>🗑️</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.detailsRow}>
                                <View style={styles.detailsColumn}>
                                    <Text style={styles.label}>ID</Text>
                                    <Text style={styles.value}>0001</Text>
                                </View>
                                <View style={styles.detailsColumn}>
                                    <Text style={styles.label}>vCPU's</Text>
                                    <Text style={styles.value}>24</Text>
                                </View>
                                <View style={styles.detailsColumn}>
                                    <Text style={styles.label}>RAM</Text>
                                    <Text style={styles.value}>96GB</Text>
                                </View>
                            </View>

                            <View style={styles.detailsRow}>
                                <View style={styles.detailsColumn}>
                                    <Text style={styles.label}>GPU's</Text>
                                    <Text style={styles.value}>0001</Text>
                                </View>
                                <View style={styles.detailsColumn}>
                                    <Text style={styles.label}>SSD</Text>
                                    <Text style={styles.value}>24</Text>
                                </View>
                                <View style={styles.detailsColumn}>
                                    <Text style={styles.label}>No. of Containers</Text>
                                    <Text style={styles.value}>1</Text>
                                </View>
                            </View>

                            <View style={styles.detailsRow}>
                                <View style={styles.detailsColumn}>
                                    <Text style={styles.label}>No. of Pipeline</Text>
                                    <Text style={styles.value}>0001</Text>
                                </View>
                                <View style={styles.detailsColumn}>
                                    <Text style={styles.label}>Tags</Text>
                                    <View style={styles.tagsRow}>
                                        <View style={styles.LabelList}>
                                            <Text style={styles.Label}>Database</Text>
                                            <Text style={styles.Label}>CSV</Text>
                                            <Text style={styles.Label}>Data</Text>
                                            <Text style={styles.Label}>+3</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <TouchableOpacity style={styles.viewButton}>
                                <Text style={styles.viewButtonText}>VIEW</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        margin: 10,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nodeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statusButton: {
        backgroundColor: '#4CAF50',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    statusText: {
        color: '#fff',
    },
    iconRow: {
        flexDirection: 'row',
    },
    iconButton: {
        marginLeft: 10,
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    detailsColumn: {
        flex: 1,
        alignItems: 'center',
    },
    label: {
        fontSize: 14,
        color: '#888',
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    tagsRow: {
        flexDirection: 'row',
        marginTop: 5,
    },
    tagInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 5,
    },
    viewButton: {
        marginTop: 20,
        backgroundColor: '#007bff',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    viewButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        padding: 15,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    Row: {
        flexDirection: 'row',
        marginTop: 15,
    },
    Col_3: {
        width: '30%',
    },
    Col_9: {
        width: '70%',
    },
    Col_12: {
        width: '100%',
    },
    mt_5: {
        marginTop: 15,
    },
    MenuButton: {
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
    TextGrey: {
        color: '#6d6d6d',
    },
    SearchWrap: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    CreateButton: {
        backgroundColor: '#007bbf',
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
    },
    TextWhite: {
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
    SearchButton: {
        position: 'absolute',
        top: 10,
        right: 20,
    },
    SearchIcon: {
        width: 30,
        height: 30,
    },
    PlusIcon: {
        width: 20,
        height: 20,
    },
    CardList: {
        flexDirection: 'row',
        //justifyContent: 'space-between',
        padding: 20,
    },
    CardBox: {
        borderWidth: 2,
        borderColor: '#ddd',
        //borderRadius: 8,
        padding: 10,
        backgroundColor: '#fff',
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        maxWidth : "35%"
    },
    CardHeader: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    CardTitle: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    CardAction: {
        flexDirection: 'row',
        gap: 10,
        paddingLeft: 10,
        paddingRight: 2,
        paddingVertical: 2,
    },
    CardBody: {

    },
    BodyText: {
        fontSize: 14,
    },
    LabelList: {
        flexDirection: 'row',
        gap: 5,
    },
    Label: {
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
