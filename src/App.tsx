import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import Profile from './screens/Profile';
import { RootStackParamList } from './types/RootParamList';
import { UserProvider } from './utils/contextApi';

const Stack = createStackNavigator<RootStackParamList>();

const globalScreenOptions = {
  headerShown: false,
};

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
