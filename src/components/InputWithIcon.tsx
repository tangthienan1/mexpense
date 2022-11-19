/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from 'react-native';
import { MCOLORS, MFONTS, MSIZES } from '../consts';

type InputWithIconProps = {
    icon: any;
    defaultValue?: string;
    keyboardType?: KeyboardTypeOptions;
    editable?: boolean;
};
const InputWithIcon: FC<InputWithIconProps> = ({ editable, keyboardType, defaultValue, icon }) => {
    return (
        <View style={styles.inputWithIcon}>
            {icon}
            <TextInput
                editable={editable}
                style={styles.text}
                defaultValue={defaultValue}
                keyboardType={keyboardType}
            />
        </View>
    );
};

export default InputWithIcon;

const styles = StyleSheet.create({
    inputTile: {
        marginTop: MSIZES.padding,
        ...MFONTS.body3,
    },
    inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 40,
        paddingHorizontal: MSIZES.padding,
        marginVertical: 12,

        borderColor: MCOLORS.darkgray,
        borderWidth: 1,
        borderRadius: 10,
    },
    text: {
        flex: 1,
        paddingLeft: MSIZES.base,
    },
});
