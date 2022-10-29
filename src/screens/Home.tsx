/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Pressable,
    Modal,
} from 'react-native';
import { MCOLORS, MSIZES, MFONTS, icons } from '../consts';

const Home = () => {
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

    const expenses = [
        {
            title: 'Transport',
            value: 300,
        },
        {
            title: 'Food',
            value: 300,
        },
        {
            title: 'Hotel',
            value: 300,
        },
        {
            title: 'Taxi',
            value: 300,
        },
    ];

    const [expenseList, setSpecialPromos] = useState(expenses);
    const [selectedTripTag, setSelectedTripTag] = useState<string>('business');
    const [isShowRequiredAssessmentModal, setIsShowRequiredAssessmentModal] =
        useState<boolean>(false);

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
            <View style={{ flex: 1, flexDirection: 'row', marginRight: MSIZES.padding }}>
                <Text style={{ ...MFONTS.body4 }}>{item.title}</Text>
                <Text style={{ ...MFONTS.body4, paddingLeft: 8 }}>${item.value}</Text>
            </View>
        );

        return (
            <FlatList
                ListHeaderComponent={BannerHeader}
                data={majorExpenses}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={(item, index) => `_key${index.toString()}`}
                renderItem={renderMajorItem}
                style={style.bannerWrapper}
            />
        );
    }

    function renderTrip() {
        return (
            <View
                style={{
                    marginTop: MSIZES.padding * 2,
                }}
            >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isShowRequiredAssessmentModal}
                    onRequestClose={() => {
                        setIsShowRequiredAssessmentModal(!isShowRequiredAssessmentModal);
                    }}
                >
                    <View style={style.centeredView}>
                        <View style={style.modalView}>
                            <Text style={style.modalText}>Required Risk Assessment</Text>
                            <Pressable
                                style={[style.button, style.buttonClose]}
                                onPress={() =>
                                    setIsShowRequiredAssessmentModal(!isShowRequiredAssessmentModal)
                                }
                            >
                                <Text style={style.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <View
                    style={{
                        marginBottom: MSIZES.padding * 2,
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text style={{ ...MFONTS.h3 }}>My Trip</Text>
                    <TouchableOpacity>
                        <Text style={{ color: MCOLORS.gray, ...MFONTS.body4 }}>View All</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.tripItemWrapper}>
                    <Text style={{ ...MFONTS.body2, marginBottom: MSIZES.padding }}>
                        Meeting Mr Cook (Apple's CEO)
                    </Text>
                    <Text style={{ fontWeight: 'bold' }}>Date: 14.Oct.2022</Text>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                        }}
                        onPress={() => setIsShowRequiredAssessmentModal(true)}
                    >
                        <Image source={icons.requiredassesment} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    function renderPromos() {
        const HeaderComponent = () => (
            <View>
                {renderHeader()}
                {renderBanner()}
                {renderTrip()}
                {renderRecentEntries()}
            </View>
        );

        const renderRecentEntries = () => (
            <View
                style={{
                    flexDirection: 'column',
                    marginVertical: MSIZES.padding * 2,
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text style={{ ...MFONTS.h3, marginBottom: MSIZES.padding }}>
                        Recent Entries
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Pressable
                        style={{
                            ...style.recentEntriesCategoryItem,
                            backgroundColor:
                                selectedTripTag === 'business' ? MCOLORS.blue : MCOLORS.gray,
                        }}
                        onPress={() => setSelectedTripTag('business')}
                    >
                        <View
                            style={{
                                ...style.recentEntriesCategoryDot,
                                backgroundColor:
                                    selectedTripTag === 'business'
                                        ? MCOLORS.emerald
                                        : MCOLORS.lightGray,
                            }}
                        />
                        <Text style={{ paddingLeft: 3, color: MCOLORS.white }}>Business</Text>
                    </Pressable>
                    <Pressable
                        style={{
                            ...style.recentEntriesCategoryItem,
                            backgroundColor:
                                selectedTripTag === 'family' ? MCOLORS.blue : MCOLORS.gray,
                        }}
                        onPress={() => setSelectedTripTag('family')}
                    >
                        <View
                            style={{
                                ...style.recentEntriesCategoryDot,
                                backgroundColor:
                                    selectedTripTag === 'family'
                                        ? MCOLORS.emerald
                                        : MCOLORS.lightGray,
                            }}
                        />
                        <Text style={style.recentEntriesCategoryText}>Family</Text>
                    </Pressable>
                    <Pressable
                        style={{
                            ...style.recentEntriesCategoryItem,
                            backgroundColor:
                                selectedTripTag === 'personal' ? MCOLORS.blue : MCOLORS.gray,
                        }}
                        onPress={() => setSelectedTripTag('personal')}
                    >
                        <View
                            style={{
                                ...style.recentEntriesCategoryDot,
                                backgroundColor:
                                    selectedTripTag === 'personal'
                                        ? MCOLORS.emerald
                                        : MCOLORS.lightGray,
                            }}
                        />
                        <Text style={{ paddingLeft: 3, color: MCOLORS.white }}>Personal</Text>
                    </Pressable>
                </View>
            </View>
        );

        const renderItem = ({ item }) => (
            <View style={style.recentEntriesItemWrapper}>
                <View>
                    <Text style={{ ...MFONTS.body3 }}>{item.title}</Text>
                    <Text>asdfasdf</Text>
                </View>
                <Text style={{ ...MFONTS.h3, color: MCOLORS.emerald }}>$250,000</Text>
            </View>
        );

        return (
            <FlatList
                ListHeaderComponent={HeaderComponent}
                contentContainerStyle={{ paddingHorizontal: MSIZES.padding * 3 }}
                numColumns={1}
                data={expenseList}
                keyExtractor={(item, index) => `_key${index.toString()}`}
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
    recentEntriesItemWrapper: {
        marginVertical: MSIZES.base,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    recentEntriesCategoryDot: {
        backgroundColor: MCOLORS.black,
        borderRadius: 4,
        height: 10,
        width: 10,
    },
    recentEntriesCategoryItem: {
        padding: MSIZES.padding,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: MSIZES.padding,
    },
    recentEntriesCategoryText: {
        paddingLeft: 3,
        color: MCOLORS.white,
    },
    headerWrapper: {
        flex: 1,
        marginVertical: MSIZES.padding * 2,
        flexDirection: 'row',
        gap: MSIZES.padding * 3,
    },
    bannerWrapper: {
        flex: 1,
        borderRadius: 20,
        padding: MSIZES.padding * 1.5,
        backgroundColor: MCOLORS.emerald,
    },
    tripItemWrapper: {
        padding: MSIZES.padding * 1.5,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: MCOLORS.gray,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default Home;
