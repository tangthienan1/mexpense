import React, { FC } from 'react';
import { Text } from 'react-native';

interface HomeProps {
    navigation: any;
}
const Home: FC<HomeProps> = ({ navigation }) => {
    return <Text>ThienAn</Text>;
};

export { Home };
