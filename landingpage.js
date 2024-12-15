import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';

// Mendapatkan dimensi layar perangkat
const { width, height } = Dimensions.get('window');

const LandingPage = () => {
    return (
        <View style={styles.container}>
            {/* Menggunakan ImageBackground sebagai background */}
            <ImageBackground
                source={require('./assets/unilocator1.png')}  // Ganti dengan path gambar Anda
                style={styles.background}
                imageStyle={{ borderRadius: 0 }} // No rounded corners for the background image
            >
                {/* Only the background image will be displayed, no other content */}
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#89A8B2', // Ensures the background of the container is transparent
    },
    background: {
        width: '100%',
        height: '100%',   // Ensures the image covers the entire screen
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',  // Ensure the image scales properly without distorting
    },
});

export default LandingPage;
