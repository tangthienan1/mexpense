import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Tabs from './src/navigation/tabs';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';

const Stack = createNativeStackNavigator();

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                {/* Tabs */}
                <Stack.Screen name="HomeScreen" component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
