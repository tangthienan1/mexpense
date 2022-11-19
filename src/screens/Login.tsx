import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import React, { FC, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    KeyboardAvoidingView,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Config from 'react-native-config';
import LinearGradient from 'react-native-linear-gradient';
import { ErrorText } from '../components/Text/Text';
import { MCOLORS, MFONTS, icons, MSIZES } from '../consts';

type LoginProps = {
    navigation: any;
};

const Login: FC<LoginProps> = ({ navigation }) => {
    const [error, setError] = useState<boolean>();
    GoogleSignin.configure({
        webClientId: Config.FIREBASE_WEB_CLIENT,
    });

    // const signInWithGoogle = async () => {
    //     // Check if your device supports Google Play
    //     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    //     // Get the users ID token
    //     const { idToken } = await GoogleSignin.signIn();
    //     // Create a Google credential with the token
    //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    //     // Sign-in the user with the credential
    //     const user_signin = auth().signInWithCredential(googleCredential);
    //     user_signin.then((res) => {
    //         console.log({ res });
    //     });
    // };

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [isLoginProgress, setIsLoginProgress] = useState<boolean>(false);

    const handleLogin = () => {
        setIsLoginProgress(true);
        console.log({ email, password });
        if (email && password) {
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(({ user }) => {
                    setIsLoginProgress(false);
                    console.log({ user });
                })
                .catch(() => {
                    setIsLoginProgress(false);
                    setError(true);
                });
        } else {
            setIsLoginProgress(false);
            setError(true);
        }
    };

    return (
        <KeyboardAvoidingView style={loginStyle.login}>
            <LinearGradient colors={[MCOLORS.lime, MCOLORS.emerald]} style={loginStyle.login}>
                <ScrollView>
                    <View style={loginStyle.logo}>
                        <Image source={icons.logo} />
                    </View>

                    <View style={loginStyle.title}>
                        <Text style={{ color: MCOLORS.lightGreen, ...MFONTS.h1 }}>Login</Text>
                        <Text style={{ color: MCOLORS.lightGreen, ...MFONTS.body3 }}>
                            Please enter the detail login
                        </Text>
                    </View>

                    <View style={loginStyle.form}>
                        <Text style={loginStyle.inputTile}>Email</Text>
                        <TextInput
                            keyboardType="email-address"
                            style={loginStyle.textInput}
                            onChangeText={(text) => setEmail(text as any)}
                        />

                        <Text style={loginStyle.inputTile}>Password</Text>

                        <TextInput
                            secureTextEntry={true}
                            style={loginStyle.textInput}
                            onChangeText={(text) => setPassword(text)}
                        />
                        {error && <ErrorText message={'Wrong email or password!!'} />}

                        <Pressable style={loginStyle.forgotPassword}>
                            <Text style={loginStyle.inputTile}>Forgot Password?</Text>
                        </Pressable>
                        <View style={loginStyle.buttonWrapper}>
                            <TouchableOpacity style={loginStyle.loginButton} onPress={handleLogin}>
                                {!isLoginProgress ? (
                                    <Text style={{ color: MCOLORS.white, ...MFONTS.h3 }}>
                                        Login
                                    </Text>
                                ) : (
                                    <ActivityIndicator color={MCOLORS.emerald} />
                                )}
                            </TouchableOpacity>
                        </View>

                        {/* Google button */}
                        {/* <GoogleSigninButton
                        style={loginStyle.google}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={signInWithGoogle}
                        disabled={false}
                    /> */}

                        <TouchableOpacity
                            style={loginStyle.bottomText}
                            onPress={() => navigation.navigate('SignUp')}
                        >
                            <Text style={loginStyle.inputTile}>
                                New User?
                                <Text style={{ color: MCOLORS.black }}>Sign Up</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};
export const loginStyle = StyleSheet.create({
    bottomText: {
        alignItems: 'center',
        marginBottom: MSIZES.padding2 * 9,
    },
    newUserText: {
        color: MCOLORS.lightGreen,
    },
    forgotPasswordWrapper: {
        marginTop: MSIZES.padding * 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    forgotPassword: {
        alignItems: 'flex-end',
        textAlign: 'right',

        ...MFONTS.h3,
    },
    buttonWrapper: {
        marginTop: MSIZES.padding * 2,
    },
    loginButton: {
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: MCOLORS.black,
    },
    textInput: {
        marginVertical: 12,
        padding: 10,
        height: 40,

        borderWidth: 1,
        borderColor: MCOLORS.lightGreen,
        borderRadius: 10,
    },
    inputTile: {
        marginTop: MSIZES.padding,
        color: MCOLORS.lightGreen,
        ...MFONTS.body3,
    },
    form: {
        marginTop: MSIZES.padding * 2,
        marginHorizontal: MSIZES.padding2 * 2,
    },
    title: {
        marginTop: MSIZES.padding * 2,
        color: MCOLORS.white,
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        marginTop: MSIZES.body1 * 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        flex: 1,
    },
    google: {
        height: 48,
        width: 192,
    },
});
export default Login;
