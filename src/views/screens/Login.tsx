import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

interface LoginProps {
    navigation?: any;
}

const Login: FC<LoginProps> = ({ navigate }) => {
    GoogleSignin.configure({
        webClientId: '8142284106-q69q95qrar7031cvrru2qg7cok31u8fp.apps.googleusercontent.com',
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
        <GoogleSigninButton
            style={style.google}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signInWithGoogle}
            disabled={false}
        />
    );
};
const style = StyleSheet.create({
    google: {
        height: 48,
        width: 192,
    },
});
export default Login;
