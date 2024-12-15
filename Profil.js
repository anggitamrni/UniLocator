import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Email icon
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Instagram icon from the brands pack

// Anda bisa mengganti dengan foto pembuat aplikasi di sini
const profileImage = require('./assets/fotoku.jpg');

const ProfilePage = () => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false);
    }, []);

    // Function to handle social media links
    const handleLink = (url) => {
        Linking.openURL(url);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Profile Card */}
                <View style={styles.card}>
                    <View style={styles.profileContainer}>
                        {/* Foto Profil */}
                        <Image source={profileImage} style={styles.profileImage} />
                        <Text style={styles.name}>Anggita Maharani</Text>
                        <Text style={styles.job}>Mobile Developer | Uni Locator</Text>
                        <Text style={styles.description}>
                            The creator of this application is a software developer who focuses on developing mobile applications using React Native. This application aims to help students find their dream campus.
                        </Text>
                    </View>
                </View>

                {/* Contact Card */}
                <View style={styles.card}>
                    <Text style={styles.contactTitle}>Contact-Me:</Text>
                    <View style={styles.contactInfoContainer}>
                        {/* Email Icon and Link */}
                        <TouchableOpacity style={styles.contactInfoItem} onPress={() => handleLink('mailto:anggitamaharani071@gmail.com')}>
                            <FontAwesomeIcon icon={faEnvelope} size={24} color="#243642" />
                            <Text style={styles.contactInfo}>anggitamaharani071@gmail.com</Text>
                        </TouchableOpacity>

                        {/* Instagram Icon and Link */}
                        <TouchableOpacity style={styles.contactInfoItem} onPress={() => handleLink('https://instagram.com/anggitamrni')}>
                            <FontAwesomeIcon icon={faInstagram} size={24} color="#243642" />
                            <Text style={styles.contactInfo}>anggitamrni</Text>
                        </TouchableOpacity>
                        {/* Linkedin Icon and Link */}
                        <TouchableOpacity style={styles.contactInfoItem} onPress={() => handleLink('https://www.linkedin.com/in/anggitamrni/')}>
                            <FontAwesomeIcon icon={faLinkedin} size={24} color="#243642" />
                            <Text style={styles.contactInfo}>anggitamrni</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#89A8B2', // Background color for the profile page
    },
    scrollContainer: {
        flexGrow: 1, // Ensures content fills the screen
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center', // Centers content horizontally
        padding: 20,
    },
    card: {
        backgroundColor: '#DEE5D4', // White background for the card
        borderRadius: 15, // Rounded corners for the card
        padding: 20,
        marginBottom: 20,
        width: '100%',
        maxWidth: 400,
        shadowColor: '#000000', // Shadow color for a subtle 3D effect
        shadowOffset: { width: 0, height: 4 }, // Shadow offset
        shadowOpacity: 0.1, // Shadow opacity
        shadowRadius: 8, // Shadow radius
        elevation: 5, // Elevation for Android
    },
    profileContainer: {
        alignItems: 'center', // Centers the profile content
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75, // Circle shape for the profile image
        marginBottom: 15,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#16423C',
        marginBottom: 5, // Adds some space between name and job title
    },
    job: {
        fontSize: 18,
        color: '#685752',
        marginBottom: 10, // Adds spacing between job and description
    },
    description: {
        fontSize: 16,
        color: '#685752',
        textAlign: 'center',
        marginHorizontal: 20,
    },
    contactTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#16423C',
        marginBottom: 10, // Adds some spacing between title and items
    },
    contactInfoContainer: {
        marginTop: 10,
        alignItems: 'flex-start', // Align items to the left for better readability
    },
    contactInfoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15, // Adds space between each contact info
    },
    contactInfo: {
        fontSize: 16,
        color: '#685752',
        marginLeft: 10, // Spacing between icon and text
    },
});

export default ProfilePage;
