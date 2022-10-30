import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { icons, MFONTS, MSIZES } from '../consts';

type Props = {};

const WelcomeUser = () => {
    return (
        <View style={style.WelcomeUserWrapper}>
            <Image source={icons.emptyAvatar} />
            <Text style={{ ...MFONTS.body2, marginHorizontal: MSIZES.padding }}>Hi Andy!</Text>
        </View>
    );
};

export default WelcomeUser;
const style = StyleSheet.create({
    WelcomeUserWrapper: {
        flexDirection: 'row',
    },
});
