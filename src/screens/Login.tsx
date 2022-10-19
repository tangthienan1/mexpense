import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import Config from 'react-native-config';
import { SafeAreaView } from 'react-native-safe-area-context';

interface LoginProps {
    navigation?: any;
}

const Login: FC<LoginProps> = ({ navigate }) => {
    GoogleSignin.configure({
        webClientId: Config.FIREBASE_WEB_CLIENT,
    });
    const signInWithGoogle = async () => {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        // Sign-in the user with the credential
        const user_signin = auth().signInWithCredential(googleCredential);
        user_signin.then((res) => {
            console.log({ res });
        });
    };
    return (
        <SafeAreaView>
            <GoogleSigninButton
                style={style.google}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signInWithGoogle}
                disabled={false}
            />
        </SafeAreaView>
    );
};
const style = StyleSheet.create({
    google: {
        height: 48,
        width: 192,
    },
});
export default Login;
