import React, { FC } from 'react';
import { Button, Text } from 'react-native';
import Config from 'react-native-config';

interface HomeScreenProps {
    navigation: any;
}
interface ProfileScreenProps {
    route: any;
}
const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <Button
            title={'thienan'}
            onPress={() => {
                return navigation.navigate('Profile', { name: 'Jane' });
            }}
        />
    );
};
const ProfileScreen: FC<ProfileScreenProps> = ({ route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};

export { HomeScreen, ProfileScreen };
