/* eslint-disable react-native/no-inline-styles */
import moment from 'moment';
import React, { FC, useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import CustomDatePicker from '../components/CustomDatePicker';
import InputTitle from '../components/InputTitle';
import InputWithIcon from '../components/InputWithIcon';
import SaveBtn from '../components/SaveBtn';
import SelectDropDown from '../components/SelectDropDown';
import { CustomTextInput, TextField } from '../components/TextInput';
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
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    return (
        <SafeAreaView style={styles.newTripScreen}>
            <CustomDatePicker open={open} date={date} setOpen={setOpen} setDate={setDate} />

            <ScrollView>
                <View style={styles.newTripWrapper}>
                    <WelcomeUser navigation={navigation} />

                    <View style={styles.logo}>
                        <Image source={icons.logo} />
                    </View>

                    <View style={styles.form}>
                        <Text style={{ ...MFONTS.body1, textAlign: 'center' }}>New Trip</Text>

                        <Text style={styles.inputTile}>Trip name</Text>
                        <CustomTextInput />

                        <Text style={styles.inputTile}>Destination</Text>
                        <CustomTextInput />

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, marginRight: MSIZES.padding }}>
                                <InputTitle title={'Location'} />
                                <InputWithIcon icon={<Image source={icons.destination} />} />
                            </View>

                            <View style={{ flex: 1 }}>
                                <InputTitle title={'Date'} />
                                <TouchableOpacity onPress={() => setOpen(true)}>
                                    <InputWithIcon
                                        editable={false}
                                        defaultValue={moment(date)
                                            .startOf('day')
                                            .format('DD/MM/YYYY')}
                                        icon={<Image source={icons.date} />}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Text style={styles.inputTile}>Tag</Text>
                        <SelectDropDown setSelected={setSelectedTags} data={Tags} />

                        <Text style={styles.inputTile}>Description</Text>
                        <TextField />

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

                        <SaveBtn onPress={() => navigation.navigate('TripList')} />
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
        marginBottom: MSIZES.padding2 * 9,
        height: 40,
        borderRadius: 20,
        backgroundColor: MCOLORS.emerald,

        justifyContent: 'center',
        alignItems: 'center',
    },
});
