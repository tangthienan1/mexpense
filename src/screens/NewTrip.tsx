/* eslint-disable react-native/no-inline-styles */
import React, { FC, useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import SelectDropDown from '../components/SelectDropDown';
import WelcomeUser from '../components/WelcomeUser';
import { icons, MCOLORS, MFONTS, MSIZES } from '../consts';

const Tags = [
    {
        value: 'Business',
        key: 'business',
    },

    {
        value: 'Family',
        key: 'family',
    },
    {
        value: 'Personal',
        key: 'personal',
    },
];

type NewTripProps = {
    navigation: any;
};

const NewTrip: FC<NewTripProps> = ({ navigation }) => {
    const [selectedTags, setSelectedTags] = useState<string | undefined>();
    const [isRequiredRiskAssessment, setIsRequiredRiskAssessment] = useState<boolean>(false);
    console.log(selectedTags);
    console.log(isRequiredRiskAssessment);

    return (
        <SafeAreaView style={styles.newTripScreen}>
            <ScrollView>
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

                        <Text style={styles.inputTile}>Tags</Text>
                        <SelectDropDown setSelected={setSelectedTags} data={Tags} />

                        <Text style={styles.inputTile}>Description</Text>
                        <TextInput style={[styles.textInput, { height: 80 }]} />

                        <Text style={styles.inputTile}>Required Risk Assessment</Text>
                        <View style={{ marginVertical: MSIZES.padding }}>
                            <Switch
                                trackColor={{ false: '#767577', true: MCOLORS.emerald }}
                                thumbColor="#f4f3f4"
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => setIsRequiredRiskAssessment((prev) => !prev)}
                                value={isRequiredRiskAssessment}
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={() => navigation.navigate('TripList')}
                        >
                            <Text style={{ color: MCOLORS.white, ...MFONTS.h3 }}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
        marginVertical: MSIZES.padding2,
        padding: MSIZES.padding,
        height: MSIZES.padding * 4,

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
    saveButton: {
        marginVertical: MSIZES.padding,
        marginBottom: MSIZES.padding2 * 4,
        height: 40,
        borderRadius: 20,
        backgroundColor: MCOLORS.emerald,

        justifyContent: 'center',
        alignItems: 'center',
    },
});
