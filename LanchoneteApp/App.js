import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer
 } from '@react-navigation/native';
import { Routes } from './src/pages/Routes';
import { Home } from './src/pages/Home';


export default function App() {

  return (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
  );
};