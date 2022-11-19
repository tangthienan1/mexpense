import React, { FC, useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { icons, MCOLORS, MFONTS } from '../consts';
import { loginStyle } from './Login';

type SignUpProps = {
    navigation?: any;
};

const SignUp: FC<SignUpProps> = ({ navigation }) => {
    const [error, setError] = useState({});

    const validatePassword = (inputPassword: string) => {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(inputPassword)) {
            setError({ ...error, ...{ password: 'Invalid password' } });
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
                        <Text style={{ color: MCOLORS.lightGreen, ...MFONTS.h1 }}>SignUp</Text>
                        <Text style={{ color: MCOLORS.lightGreen }}>
                            Please enter the detail to get started
                        </Text>
                    </View>

                    <View style={loginStyle.form}>
                        <Text style={loginStyle.inputTile}>Name</Text>
                        <TextInput style={loginStyle.textInput} />

                        <Text style={loginStyle.inputTile}>Email ID</Text>
                        <TextInput style={loginStyle.textInput} />

                        <Text style={loginStyle.inputTile}>Password</Text>
                        <TextInput secureTextEntry={true} style={loginStyle.textInput} />

                        <Text style={loginStyle.inputTile}>Re-Enter Password</Text>
                        <TextInput secureTextEntry={true} style={loginStyle.textInput} />
                        <View style={loginStyle.buttonWrapper}>
                            <TouchableOpacity
                                style={loginStyle.loginButton}
                                onPress={() => navigation.navigate('Home')}
                            >
                                <Text style={{ color: MCOLORS.white, ...MFONTS.h3 }}>SignUp</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={loginStyle.bottomText}
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={loginStyle.inputTile}>
                                Already have an account?
                                <Text style={{ color: MCOLORS.black }}>Login</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};
export default SignUp;
