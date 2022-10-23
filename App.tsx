import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { HomeScreen, ProfileScreen } from './src/screens/HomeScreen';
import Login from './src/screens/Login';
import SplashScreen from 'react-native-splash-screen';
import SignUp from './src/screens/SignUp';

const Stack = createNativeStackNavigator();

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
