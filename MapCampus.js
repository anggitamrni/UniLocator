import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, TextInput, Text, Button, StyleSheet } from 'react-native';

const Createdata = () => {
  const jsonUrl = 'http://192.168.100.28:3000/mahasiswa';
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [kelas, setKelas] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');

  const submit = () => {
    const data = { first_name, last_name, email, kelas, gender };
    fetch(jsonUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        alert('Data tersimpan');
        setFirstName('');
        setLastName('');
        setEmail('');
        setKelas('');
        setGender('');
      });
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Tambah Data Mahasiswa</Text>
        <ScrollView style={styles.form}>
          <TextInput style={styles.input} placeholder="Nama Depan" value={first_name} onChangeText={setFirstName} />
          <TextInput style={styles.input} placeholder="Nama Belakang" value={last_name} onChangeText={setLastName} />
          <TextInput style={styles.input} placeholder="Kelas" value={kelas} onChangeText={setKelas} />
          <TextInput style={styles.input} placeholder="Jenis Kelamin" value={gender} onChangeText={setGender} />
          <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
          <Button title="Simpan" onPress={submit} color="#AA5486" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Createdata;

const styles = StyleSheet.create({
  title: {
    paddingVertical: 12,
    backgroundColor: '#987D9A',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    padding: 10,
    marginBottom: 100,
  },
  input: {
    backgroundColor: '#B692C2',
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 8,
    padding: 8,
    width: '100%',
    marginVertical: 5,
  },
});
