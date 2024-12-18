import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Profil from './App'
import Mahasiswa from './Campus'
import { faUser,faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { WebView } from 'react-native-webview'

function HomeScreen() {
  return (
    <Profil />
  );
}

function DataMahasiswaScreen() {
  return (
    <Mahasiswa />
  );
}
function WebScreen() {
  return (
    <WebView
        source={{ uri: 'https://github.com/anggitamrni' }}
      />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profil" component={HomeScreen}
          options={{
            headerShown: false,

            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faUser} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen name="Mahasiswa" component={DataMahasiswaScreen}
          options={{

            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faUserGraduate} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen name="GitHUB" component={WebScreen}
          options={{

            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faGithub} color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}