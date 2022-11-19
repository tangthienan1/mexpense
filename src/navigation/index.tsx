import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AuthApp from './authApp';
import ManageApp from './ManageApp';
import { useAuth } from './useAuth';

export default function RootNavigation() {
    const { user, initializing } = useAuth();
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    if (initializing) {
        return null;
    }

    return user ? <ManageApp /> : <AuthApp />;
}
