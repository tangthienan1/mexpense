/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons, MCOLORS, MFONTS, MSIZES } from '../consts';

type Props = {};

const Account = (props: Props) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: MCOLORS.white,
                paddingHorizontal: MSIZES.padding,
            }}
        >
            <View style={{ alignItems: 'center', marginBottom: MSIZES.padding2 * 3 }}>
                <Image style={{ height: 36, width: 36 }} source={icons.logo} />
            </View>

            <View style={{ alignItems: 'center', marginBottom: MSIZES.padding }}>
                <View
                    style={{
                        height: 120,
                        width: 120,
                        backgroundColor: MCOLORS.gray,
                        borderRadius: 100,
                    }}
                >
                    <Image style={{ width: 120, height: 120 }} source={icons.emptyAvatar} />
                    <TouchableOpacity style={{ position: 'absolute', right: 0, bottom: 0 }}>
                        <View
                            style={{
                                width: 38,
                                height: 38,
                                backgroundColor: MCOLORS.blue,
                                borderRadius: 100,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Image source={icons.camera} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ alignItems: 'center', marginBottom: MSIZES.padding2 * 5 }}>
                <Text style={{ ...MFONTS.body2 }}>Hồ Nguyễn Phú Bảo</Text>
                <Text style={{ ...MFONTS.body2, color: MCOLORS.gray }}>(+84) 963 893 893</Text>
                <Text style={{ ...MFONTS.body2, color: MCOLORS.gray }}>baohnp@fe.edu.vn</Text>
            </View>

            <TouchableOpacity style={styles.card}>
                <Text>Edit Profile</Text>
                <Image source={icons.rightarrow} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <Text>Export Data</Text>
                <Image source={icons.rightarrow} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <Text>Settings</Text>
                <Image source={icons.rightarrow} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <Text>Support Info</Text>
                <Image source={icons.rightarrow} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Account;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: MSIZES.padding,
        marginBottom: MSIZES.padding,

        borderWidth: 1,
        borderColor: MCOLORS.gray,
        borderRadius: 5,
    },
});
