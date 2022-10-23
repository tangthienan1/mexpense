import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Home } from './src/screens/Home';
import Login from './src/screens/Login';
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
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
