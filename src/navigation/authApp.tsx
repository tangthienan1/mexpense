import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { SharedStateProvider } from '../contexts';
import AddExpense from '../screens/AddExpense';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Tabs from './tabs';

const Stack = createNativeStackNavigator();

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <SharedStateProvider>
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

                    <Stack.Screen name="AddExpense" component={AddExpense} />
                </Stack.Navigator>
            </NavigationContainer>
        </SharedStateProvider>
    );
};

export default App;
