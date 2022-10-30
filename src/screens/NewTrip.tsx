/* eslint-disable react-native/no-inline-styles */
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { MSIZES, icons, MFONTS, MCOLORS } from '../consts';
import WelcomeUser from '../components/WelcomeUser';

const Tags = [
    {
        item: 'Business',
        id: 'business',
    },

    {
        item: 'Family',
        id: 'family',
    },
    {
        item: 'Personal',
        id: 'personal',
    },
];

type Tag = {
    item: string;
    id: string;
};

const NewTrip = () => {
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

    return (
        <SafeAreaView style={styles.newTripScreen}>
            <View style={styles.newTripWrapper}>
                <WelcomeUser />
                <View style={styles.logo}>
                    <Image source={icons.logo} />
                </View>
                <View style={styles.form}>
                    <Text style={{ ...MFONTS.body1, textAlign: 'center' }}>New Trip</Text>

                    <Text style={styles.inputTile}>Trip name</Text>
                    <TextInput style={styles.textInput} />
                    <Text style={styles.inputTile}>Destination</Text>
                    <TextInput style={styles.textInput} />
                    <View style={{ flexDirection: 'row' }}>
                        {/* <View style={{ flex: 1 }}>
                            <Text style={styles.inputTile}>Budget</Text>
                            <View
                                style={{ flexDirection: 'row', height: 40, alignItems: 'center' }}
                            >
                                <Image source={icons.dollar} />
                                <TextInput style={{ flex: 1, backgroundColor: MCOLORS.emerald }} />
                            </View>
                        </View> */}
                        <View style={{ flex: 1, marginRight: MSIZES.padding }}>
                            <Text style={styles.inputTile}>Budget</Text>
                            <View style={styles.inputWithIcon}>
                                <Image source={icons.dollar} />
                                <TextInput style={{ flex: 1 }} />
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.inputTile}>Date</Text>
                            <View style={styles.inputWithIcon}>
                                <TextInput style={{ flex: 1 }} />
                                <Image source={icons.date} />
                            </View>
                        </View>
                    </View>
                    {/* <Text style={styles.inputTile}>Destination</Text>
                    <TextInput style={styles.textInput} /> */}
                    {/* <View>
                        <SelectBox
                            label="Select multiple"
                            options={Tags}
                            selectedValues={selectedTags}
                            onMultiSelect={onMultiChange()}
                            onTapClose={onMultiChange()}
                            isMulti
                        />
                    </View> */}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NewTrip;

const styles = StyleSheet.create({
    newTripScreen: {
        flex: 1,
        backgroundColor: MCOLORS.white,
    },
    newTripWrapper: {
        paddingHorizontal: MSIZES.padding,
    },
    logo: {
        paddingTop: MSIZES.padding * 2,
        alignItems: 'center',
    },
    form: {
        paddingTop: MSIZES.padding * 2,
        paddingHorizontal: MSIZES.padding2 * 2,
    },
    inputTile: {
        marginTop: MSIZES.padding,
        ...MFONTS.body3,
    },
    textInput: {
        marginVertical: 12,
        padding: 10,
        height: 40,

        borderWidth: 1,
        borderRadius: 10,
        borderColor: MCOLORS.darkgray,
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
});
