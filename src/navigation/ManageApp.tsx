import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { SharedStateProvider } from '../contexts';
import AddExpense from '../screens/AddExpense';
import Tabs from './tabs';

const Stack = createNativeStackNavigator();

const ManageApp = () => {
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
                    initialRouteName="Tabs"
                >
                    {/* Tabs */}
                    <Stack.Screen name="Tabs" component={Tabs} />

                    <Stack.Screen name="AddExpense" component={AddExpense} />
                </Stack.Navigator>
            </NavigationContainer>
        </SharedStateProvider>
    );
};

export default ManageApp;
