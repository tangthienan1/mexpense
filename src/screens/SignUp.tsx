import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import React, { FC } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Config from 'react-native-config';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, icons, SIZES } from '../consts';

interface SignUpProps {
    navigation?: any;
}

const SignUp: FC<SignUpProps> = ({ navigation }) => {
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
        <KeyboardAvoidingView style={style.SignUp}>
            <LinearGradient colors={[COLORS.lime, COLORS.emerald]} style={style.SignUp}>
                <ScrollView>
                    {/* Logo */}
                    <View style={style.logo}>
                        <Image source={icons.logo} />
                    </View>

                    <View style={style.title}>
                        <Text style={{ color: COLORS.lightGreen, ...FONTS.h1 }}>SignUp</Text>
                        <Text style={{ color: COLORS.lightGreen }}>
                            Please enter the detail to get started
                        </Text>
                    </View>

                    <View style={style.form}>
                        <Text style={style.inputTile}>Name</Text>
                        <TextInput style={style.textInput} />

                        <Text style={style.inputTile}>Email ID</Text>
                        <TextInput style={style.textInput} />

                        <Text style={style.inputTile}>Password</Text>
                        <TextInput secureTextEntry={true} style={style.textInput} />

                        <Text style={style.inputTile}>Re-Enter Password</Text>
                        <TextInput secureTextEntry={true} style={style.textInput} />
                    </View>

                    <View style={style.buttonWrapper}>
                        <TouchableOpacity
                            style={style.SignUpButton}
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>SignUp</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Google button */}
                    <GoogleSigninButton
                        style={style.google}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={signInWithGoogle}
                        disabled={false}
                    />

                    <TouchableOpacity
                        style={style.newUser}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={style.inputTile}>
                            Already have an account?
                            <Text style={{ color: COLORS.black }}>Login</Text>
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};
const style = StyleSheet.create({
    newUser: {
        alignItems: 'center',
    },
    newUserText: {
        color: COLORS.lightGreen,
    },
    forgotPasswordWrapper: {
        marginTop: SIZES.padding * 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    forgotPassword: {
        alignItems: 'flex-end',
        textAlign: 'right',

        ...FONTS.h3,
    },
    buttonWrapper: {
        marginTop: SIZES.padding,
    },
    SignUpButton: {
        marginHorizontal: SIZES.padding,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.black,
    },
    textInput: {
        marginVertical: 12,
        padding: 10,
        height: 40,

        borderWidth: 1,
        borderColor: COLORS.lightGreen,
        borderRadius: 10,
    },
    inputTile: {
        color: COLORS.lightGreen,
        ...FONTS.h3,
    },
    form: {
        marginTop: SIZES.padding * 2,
        marginHorizontal: SIZES.padding,
    },
    title: {
        marginTop: SIZES.padding * 2,
        color: COLORS.white,
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        marginTop: SIZES.body1 * 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    SignUp: {
        flex: 1,
    },
    google: {
        height: 48,
        width: 192,
    },
});
export default SignUp;
