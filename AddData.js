import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, TextInput, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';  // Import PermissionsAndroid

const CreateCampus = () => {
  const jsonUrl = 'http://192.168.100.28:3000/mahasiswa';  // Your backend URL
  const [name, setName] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [location, setLocation] = useState('');
  const [imageUri, setImageUri] = useState('');
  

  // Function to request camera permission
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Permission Kamera',
          message: 'Aplikasi ini membutuhkan akses ke kamera Anda',
          buttonNeutral: 'Tanya Nanti',
          buttonNegative: 'Batal',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Izin Kamera diberikan');
      } else {
        console.log('Izin Kamera ditolak');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Handle camera button to capture an image
  const handleCamera = async () => {
    await requestCameraPermission();  // Call the permission request function before opening the camera
    launchCamera(
      {
        mediaType: 'photo', // Set media type to photo
        quality: 1, // High quality image
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          console.error('ImagePicker Error: ', response.errorMessage);
        } else {
          const uri = response.assets[0].uri;
          setImageUri(uri);  // Set the captured image URI to state
        }
      }
    );
  };

  // Submit the form data
  const submit = () => {
    const data = { name, longitude, latitude, location, imageUri };

    fetch(jsonUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),  // Convert data to JSON format for POST request
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        alert('Campus data saved');
        // Reset form fields
        setName('');
        setLongitude('');
        setLatitude('');
        setLocation('');
        setImageUri('');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Add Campus</Text>
      </View>
      <ScrollView style={styles.form}>
        <Text style={styles.label}>Campus Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter campus name"
          value={name}
          onChangeText={setName}  // Handle text input for name
        />

        <Text style={styles.label}>Longitude</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter longitude"
          value={longitude}
          onChangeText={setLongitude}  // Handle text input for longitude
          keyboardType="numeric"  // Make input numeric only
        />

        <Text style={styles.label}>Latitude</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter latitude"
          value={latitude}
          onChangeText={setLatitude}  // Handle text input for latitude
          keyboardType="numeric"  // Make input numeric only
        />

        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          value={location}
          onChangeText={setLocation}  // Handle text input for location
        />

        <Text style={styles.label}>Image</Text>
        <TouchableOpacity style={styles.cameraButton} onPress={handleCamera}>
          <Text style={styles.cameraButtonText}>Take a Picture</Text>
        </TouchableOpacity>

        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.preview} />
        ) : (
          <Text style={styles.previewText}>No image captured</Text>
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={submit}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateCampus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89A8B2',  // Warna latar belakang yang lebih terang
  },
  header: {
    backgroundColor: '#243642',  // Warna ungu yang lembut untuk header
    paddingVertical: 10,  // Memperbesar tinggi header
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,  // Memberikan efek bayangan pada header
  },
  title: {
    color: 'white',
    fontSize: 20,  // Ukuran font lebih besar
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: '#DEE5D4',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#B7B7B7',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cameraButton: {
    backgroundColor: '#243642',  // Warna ungu pada tombol
    padding: 12,
    borderRadius: 10,
    marginVertical: 15,
    alignItems: 'center',
  },
  cameraButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  preview: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  previewText: {
    textAlign: 'center',
    color: '#777',
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#243642',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
