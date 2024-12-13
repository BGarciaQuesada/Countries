import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import HomeScreen from './src/screens/HomeScreen'
import CountriesScreen from './src/screens/CountriesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Countries" component={CountriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
