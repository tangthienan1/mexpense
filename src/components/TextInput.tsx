import React, { FC } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { MCOLORS, MSIZES } from '../consts';

export const TextField: FC<{ height?: number }> = ({ height }) => {
    return <TextInput multiline style={[styles.textInput, { height: height || 80 }]} />;
};

export const CustomTextInput = () => {
    return <TextInput style={styles.textInput} />;
};

const styles = StyleSheet.create({
    textInput: {
        marginVertical: MSIZES.padding2,
        padding: MSIZES.padding,
        height: MSIZES.padding * 4,

        borderWidth: 1,
        borderRadius: 10,
        borderColor: MCOLORS.darkgray,
    },
});
