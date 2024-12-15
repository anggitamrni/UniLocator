import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faUser,faUserGraduate,faPlusCircle,faUserPen,faHome,faMap,faAdd,faList, faUniversity,} from '@fortawesome/free-solid-svg-icons';
import MapCampus from './MapCampus'; // Tambah Data Page
import { WebView } from 'react-native-webview';
import AddCampus from './AddData'; // List Data Page
import Profil from './Profil'; // Edit Data Page
import LandingPage from './landingpage'; // Landing Page
import Campus from './Campus'; // List Data Page
import Mahasiswa from './Campus';
import { View, Text, StyleSheet } from 'react-native';

// HomeScreen untuk menampilkan Landing Page
function HomeScreen() {
  return <LandingPage />;
}

// TambahScreen untuk menampilkan komponen MapScreen
function MapScreen() {
  return <WebView
    source={{ uri: 'https://leaflet-jet.vercel.app/home' }}
  />
}

// ListDataScreen untuk menampilkan daftar data mahasiswa
function CampusScreen() {
  return <Campus />;
}

// DataMahasiswaScreen untuk menampilkan daftar mahasiswa
function AddCampusScreen() {
  return <AddCampus />;
}

// EditScreen untuk mengedit data
function ProfilScreen() {
  return <Profil />;
}

// Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: '#DEE5D4',
            borderRadius: 15,
            height: 70,
            marginHorizontal: 10,
            marginBottom: 10,
            position: 'absolute',
            shadowColor: '#9AA6B2',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 2,
            shadowRadius: 6,
            elevation: 8,
          },
          tabBarActiveTintColor: '#1F509A',
          tabBarInactiveTintColor: '#243642',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '700',
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = faHome;
                break;
              case 'Map':
                iconName = faMap;
                break;
              case 'Campus':
                iconName = faUniversity;
                break;
              case 'Add Campus':
                iconName = faAdd;
                break;
              case 'Profil':
                iconName = faUser;
                break;
              default:
                iconName = faHome;
            }

            // Custom Icon Size & Style for Focused State
            return (
              <FontAwesomeIcon
                icon={iconName}
                color={color}
                size={focused ? 26 : 22}
                style={focused ? styles.iconShadow : null}
              />
            );
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Campus" component={CampusScreen} />
        <Tab.Screen name="Add Campus" component={AddCampusScreen} />
        <Tab.Screen name="Profil" component={ProfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});
