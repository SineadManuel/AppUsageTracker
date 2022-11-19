import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import AppLimit from './screens/AppLimit';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen Time' component={Home}/>
        <Stack.Screen name='App Limit' component={AppLimit}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
