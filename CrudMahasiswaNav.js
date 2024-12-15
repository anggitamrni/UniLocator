import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faUserGraduate, faPlusCircle, faUserPen, faHome, faMap, faAdd, faList } from '@fortawesome/free-solid-svg-icons';
import MapCampus from './MapCampus'; // Tambah Data Page
import AddCampus from './AddData'; // List Data Page
import Profil from './Profil'; // Edit Data Page
import LandingPage from './landingpage'; // Landing Page
import Campus from './Campus'; // List Data Page
import Mahasiswa from './Campus';

// HomeScreen untuk menampilkan Landing Page
function HomeScreen() {
  return <LandingPage />;
}

// TambahScreen untuk menampilkan komponen MapScreen
function MapScreen() {
  return <MapCampus />;
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
        screenOptions={{
          tabBarStyle: { backgroundColor: '#f8f9fa', paddingVertical: 5 },
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: '#6c757d',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faHome} color={color} size={20} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faMap} color={color} size={20} />,
            headerShown: false,
          }}
        />
         <Tab.Screen
          name="Campus"
          component={CampusScreen}
          options={{
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faList} color={color} size={20} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Add Campus"
          component={AddCampusScreen}
          options={{
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faAdd} color={color} size={20} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profil"
          component={ProfilScreen}
          options={{
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faUser} color={color} size={20} />,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
