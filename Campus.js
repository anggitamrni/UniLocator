import React from 'react';
import Datacampus from './data/campus.json';
import { Text, View, TouchableOpacity, Linking, StyleSheet, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

const CampusList = () => {
    return (
        <View style={styles.container}>
            {/* Header Daftar Kampus */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Campus</Text>
            </View>

            <FlatList
                data={Datacampus}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            Linking.openURL('google.navigation:q=' + item.latitude + ',' + item.longitude)
                        }
                    >
                        <View style={styles.card}>
                            <View style={styles.avatar}>
                                <FontAwesomeIcon 
                                    icon={faUniversity} 
                                    size={50} 
                                    color="#243642" 
                                />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode="tail">
                                    {item.name}
                                </Text>
                                <Text style={styles.cardEmail}>Email: {item.email}</Text>
                                <Text style={styles.cardAddress}>Address: {item.address}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default CampusList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#89A8B2', // Warna latar belakang yang lebih lembut
    },
    // Styling untuk header
    header: {
        backgroundColor: '#243642',  // Warna ungu yang lembut untuk header
        paddingVertical: 10,  // Memperbesar tinggi header
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,  // Memberikan efek bayangan pada header
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center', // Menyelaraskan teks ke tengah
    },
    avatar: {
        borderRadius: 40, // Ukuran avatar yang lebih kecil dan lebih rapi
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D0E2D0', // Warna latar belakang avatar
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
        paddingLeft: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2A3D45',
        marginBottom: 5,
        lineHeight: 22,
    },
    cardEmail: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    cardCoordinates: {
        fontSize: 12,
        color: '#777',
    },
    card: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 12,
        backgroundColor: '#DEE5D4',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
        marginHorizontal: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
});
