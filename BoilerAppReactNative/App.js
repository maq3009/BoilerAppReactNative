import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs '
import { Inventory } from './screens/Expenses';
import { Add } from './screens/Add';
import { Settings } from 'react-native';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator>
        <Tab.Screen name= 'Inventory' component={ Inventory } />
        <Tab.Screen name= 'Add' component={ Add } />
        <Tab.Screen name= 'Settings' component={ Settings } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
  },
  image: {
    height: 100,
    width: 100,
    padding: 100,
  }

});
