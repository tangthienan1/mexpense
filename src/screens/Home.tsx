/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { MCOLORS, MSIZES, MFONTS, icons } from '../consts';

const Home = () => {
    const featuresData = [
        {
            id: 1,
            icon: icons.home,
            color: MCOLORS.purple,
            backgroundColor: MCOLORS.lightpurple,
            description: 'Top Up',
        },
        {
            id: 2,
            icon: icons.home,
            color: MCOLORS.yellow,
            backgroundColor: MCOLORS.lightyellow,
            description: 'Transfer',
        },
        {
            id: 3,
            icon: icons.home,
            color: MCOLORS.primary,
            backgroundColor: MCOLORS.lightGreen,
            description: 'Internet',
        },
        {
            id: 4,
            icon: icons.home,
            color: MCOLORS.red,
            backgroundColor: MCOLORS.lightRed,
            description: 'Wallet',
        },
        {
            id: 5,
            icon: icons.home,
            color: MCOLORS.yellow,
            backgroundColor: MCOLORS.lightyellow,
            description: 'Bill',
        },
        {
            id: 6,
            icon: icons.home,
            color: MCOLORS.primary,
            backgroundColor: MCOLORS.lightGreen,
            description: 'Games',
        },
        {
            id: 7,
            icon: icons.home,
            color: MCOLORS.red,
            backgroundColor: MCOLORS.lightRed,
            description: 'Mobile Prepaid',
        },
        {
            id: 8,
            icon: icons.home,
            color: MCOLORS.purple,
            backgroundColor: MCOLORS.lightpurple,
            description: 'More',
        },
    ];

    const majorExpenses = [
        {
            title: 'Food',
            value: 200,
        },
        {
            title: 'Taxi',
            value: 200,
        },
        {
            title: 'Gift',
            value: 200,
        },
        {
            title: 'Transport',
            value: 200,
        },
        {
            title: 'Hotel',
            value: 300,
        },
        {
            title: 'Phone',
            value: 50,
        },
    ];

    const specialPromoData = [
        {
            id: 1,
            img: icons.home,
            title: 'Bonus Cashback1',
            description: "Don't miss it. Grab it now!",
        },
        {
            id: 2,
            img: icons.home,
            title: 'Bonus Cashback2',
            description: "Don't miss it. Grab it now!",
        },
        {
            id: 3,
            img: icons.home,
            title: 'Bonus Cashback3',
            description: "Don't miss it. Grab it now!",
        },
        {
            id: 4,
            img: icons.home,
            title: 'Bonus Cashback4',
            description: "Don't miss it. Grab it now!",
        },
    ];

    const [features, setFeatures] = React.useState(featuresData);
    const [specialPromos, setSpecialPromos] = React.useState(specialPromoData);

    function renderHeader() {
        return (
            <View style={style.headerWrapper}>
                <Image source={icons.emptyAvatar} />
                <Text style={{ ...MFONTS.h2, marginHorizontal: MSIZES.padding }}>Hi Andy!</Text>
            </View>
        );
    }

    function renderBanner({ total } = { total: 12345 }) {
        const BannerHeader = () => {
            return (
                <View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        }}
                    >
                        <Text style={{ ...MFONTS.h4 }}>Total Expense</Text>
                        <Text style={{ ...MFONTS.h4 }}>$ {total}</Text>
                    </View>
                    <Text style={{ ...MFONTS.h4 }}>Major expenses</Text>
                </View>
            );
        };

        const renderMajorItem = ({ item }) => (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ ...MFONTS.body4 }}>{item.title}</Text>
                <Text style={{ ...MFONTS.body4, paddingLeft: 8 }}>{item.value}</Text>
            </View>
        );

        return (
            <FlatList
                ListHeaderComponent={BannerHeader}
                data={majorExpenses}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={(item) => `${item.title}`}
                renderItem={renderMajorItem}
                style={style.bannerWrapper}
            />
        );
    }

    function renderFeatures() {
        const Header = () => (
            <View style={{ marginBottom: MSIZES.padding * 2 }}>
                <Text style={{ ...MFONTS.h3 }}>Features</Text>
            </View>
        );

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: MSIZES.padding * 2, width: 60, alignItems: 'center' }}
                onPress={() => console.log(item.description)}
            >
                <View
                    style={{
                        height: 50,
                        width: 50,
                        marginBottom: 5,
                        borderRadius: 20,
                        backgroundColor: item.backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        source={item.icon}
                        resizeMode="contain"
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: item.color,
                        }}
                    />
                </View>
                <Text style={{ textAlign: 'center', flexWrap: 'wrap', ...MFONTS.body4 }}>
                    {item.description}
                </Text>
            </TouchableOpacity>
        );

        return (
            <FlatList
                ListHeaderComponent={Header}
                data={features}
                numColumns={4}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                style={{ marginTop: MSIZES.padding * 2 }}
            />
        );
    }

    function renderPromos() {
        const HeaderComponent = () => (
            <View>
                {renderHeader()}
                {renderBanner()}
                {renderFeatures()}
                {renderPromoHeader()}
            </View>
        );

        const renderPromoHeader = () => (
            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: MSIZES.padding,
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text style={{ ...MFONTS.h3 }}>Special Promos</Text>
                </View>
                <TouchableOpacity onPress={() => console.log('View All')}>
                    <Text style={{ color: MCOLORS.gray, ...MFONTS.body4 }}>View All</Text>
                </TouchableOpacity>
            </View>
        );

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    marginVertical: MSIZES.base,
                    width: MSIZES.width / 2.5,
                }}
                onPress={() => console.log(item.title)}
            >
                <View
                    style={{
                        height: 80,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: MCOLORS.primary,
                    }}
                >
                    <Image
                        source={icons.home}
                        resizeMode="cover"
                        style={{
                            width: '100%',
                            height: '100%',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}
                    />
                </View>

                <View
                    style={{
                        padding: MSIZES.padding,
                        backgroundColor: MCOLORS.lightGray,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                    }}
                >
                    <Text style={{ ...MFONTS.h4 }}>{item.title}</Text>
                    <Text style={{ ...MFONTS.body4 }}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        );

        return (
            <FlatList
                ListHeaderComponent={HeaderComponent}
                contentContainerStyle={{ paddingHorizontal: MSIZES.padding * 3 }}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={specialPromos}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{ marginBottom: 80 }} />}
            />
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: MCOLORS.white }}>
            {renderPromos()}
        </SafeAreaView>
    );
};
const style = StyleSheet.create({
    headerWrapper: {
        flex: 1,
        marginVertical: MSIZES.padding * 2,
        flexDirection: 'row',
        gap: MSIZES.padding * 3,
    },
    bannerWrapper: {
        flex: 1,
        borderRadius: 20,
        padding: MSIZES.padding * 2,
        backgroundColor: MCOLORS.emerald,
    },
});

export default Home;
