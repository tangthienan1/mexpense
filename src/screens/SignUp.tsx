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
import LinearGradient from 'react-native-linear-gradient';
import { MCOLORS, MFONTS, icons, MSIZES } from '../consts';

interface SignUpProps {
    navigation?: any;
}

const SignUp: FC<SignUpProps> = ({ navigation }) => {
    return (
        <KeyboardAvoidingView style={style.SignUp}>
            <LinearGradient colors={[MCOLORS.lime, MCOLORS.emerald]} style={style.SignUp}>
                <ScrollView>
                    <View style={style.logo}>
                        <Image source={icons.logo} />
                    </View>

                    <View style={style.title}>
                        <Text style={{ color: MCOLORS.lightGreen, ...MFONTS.h1 }}>SignUp</Text>
                        <Text style={{ color: MCOLORS.lightGreen }}>
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
                            onPress={() => navigation.navigate('Home')}
                        >
                            <Text style={{ color: MCOLORS.white, ...MFONTS.h3 }}>SignUp</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={style.bottomText}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={style.inputTile}>
                            Already have an account?
                            <Text style={{ color: MCOLORS.black }}>Login</Text>
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};
const style = StyleSheet.create({
    bottomText: {
        marginTop: MSIZES.padding,
        alignItems: 'center',
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
        marginTop: MSIZES.padding,
    },
    SignUpButton: {
        marginHorizontal: MSIZES.padding,
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
        color: MCOLORS.lightGreen,
        ...MFONTS.h3,
    },
    form: {
        marginTop: MSIZES.padding * 2,
        marginHorizontal: MSIZES.padding,
    },
    title: {
        marginTop: MSIZES.padding * 2,
        color: MCOLORS.white,
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        shadowColor: MCOLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        marginTop: MSIZES.body1 * 2,
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
