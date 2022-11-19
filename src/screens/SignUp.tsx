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

type ErrorType = {
    email?: string;
    password?: string;
};

const SignUp: FC<SignUpProps> = ({ navigation }) => {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [reEnPassword, setReEnPassword] = useState<string>();
    const [error, setError] = useState<ErrorType>();
    console.log({ error });

    const validatePassword = (inputPassword: string) => {
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(inputPassword)) {
            setError({ ...error, ...{ password: 'Invalid password' } });
        }
    };

    const validateEmail = (inputEmail: string) => {
        console.log({ inputEmail });
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail)) {
            console.log('emailll');
            setError({ ...error, ...{ email: 'Invalid email' } });
        }
    };

    const handleSignUp = () => {};

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
                        <TextInput
                            style={loginStyle.textInput}
                            onChangeText={(text) => setName(text)}
                        />

                        <Text style={loginStyle.inputTile}>Email</Text>
                        <TextInput
                            style={loginStyle.textInput}
                            onChangeText={(text) => setEmail(text)}
                            onBlur={(e) => validateEmail(e.nativeEvent.text)}
                        />
                        {error?.email && <Text>{error.email}</Text>}

                        <Text style={loginStyle.inputTile}>Password</Text>
                        <TextInput
                            secureTextEntry={true}
                            style={loginStyle.textInput}
                            onChangeText={(text) => setPassword(text)}
                            onBlur={(e) => validatePassword(e.nativeEvent.text)}
                        />
                        {error?.password && <Text>{error.password}</Text>}

                        <Text style={loginStyle.inputTile}>Re-Enter Password</Text>
                        <TextInput
                            secureTextEntry={true}
                            style={loginStyle.textInput}
                            onChangeText={(text) => setReEnPassword(text)}
                        />

                        <View style={loginStyle.buttonWrapper}>
                            <TouchableOpacity style={loginStyle.loginButton} onPress={handleSignUp}>
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
