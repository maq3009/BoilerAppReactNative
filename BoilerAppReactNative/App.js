import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login_SignUp } from './screens/Login_SignUp';
import { Inventory } from './screens/Inventory';
import { Add } from './screens/Add';
import { Settings } from './screens/Settings';
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native'

const Tab = createBottomTabNavigator();


export default function App() {
  const theme = useColorScheme();


  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style="light" />
      <Tab.Navigator>
        <Tab.Screen name= 'Login/SignUp' component={ Login_SignUp }
          options={{
            headerTitleAlign: 'center',
          }} />
        <Tab.Screen name= 'Inventory' component={ Inventory }
          options={{
            headerTitleAlign: 'center',
          }} />
        <Tab.Screen name= 'Add Part' component={ Add }
          options={{
            headerTitleAlign: 'center',
          }} />
        <Tab.Screen name= 'Settings' component={ Settings }
          options={{
            headerTitleAlign: 'center',
          }} />
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
