/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
    FlatList,
    Image,
    ListRenderItem,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Layout from '../components/Layout';
import WelcomeUser from '../components/WelcomeUser';
import { icons, MCOLORS, MFONTS, MSIZES } from '../consts';
import { HomeEntriesItemProps } from '../type';

const HomeScreen = () => {
    const expenses = [
        {
            title: 'Move',
            value: 300,
            date: 'Sun 30 Oct',
        },
        {
            title: 'Food',
            value: 300,
            date: 'Sun 30 Oct',
        },
        {
            title: 'Hotel',
            value: 200,
            date: 'Sun 30 Oct',
        },
        {
            title: 'Taxi',
            value: 100,
            date: 'Sun 30 Oct',
        },
        {
            title: 'Move',
            value: 600,
            date: 'Sun 30 Oct',
        },
        {
            title: 'Food',
            value: 400,
            date: 'Sun 30 Oct',
        },
        {
            title: 'Hotel',
            value: 100,
            date: 'Sun 30 Oct',
        },
        {
            title: 'Taxi',
            value: 700,
            date: 'Sun 30 Oct',
        },
        {
            title: 'Food',
            value: 400,
            date: 'Sun 30 Oct',
        },
        {
            title: 'Hotel',
            value: 100,
            date: 'Sun 30 Oct',
        },
        {
            title: 'Taxi',
            value: 700,
            date: 'Sun 30 Oct',
        },
    ];

    const [expenseList, setExpenseList] = useState<HomeEntriesItemProps[]>(expenses);
    const [selectedTripTag, setSelectedTripTag] = useState<string>('business');
    const [isShowRequiredAssessmentModal, setIsShowRequiredAssessmentModal] =
        useState<boolean>(false);

    //ExpenseList max length is 8 for display on banner
    const sortedExpenseList = expenses.sort((prev, next) => -prev.value + next.value);
    const uniqueExpenseListByValue = [
        ...new Map(sortedExpenseList.map((item) => [item.value, item])).values(),
    ];
    const majorExpenseList = uniqueExpenseListByValue.slice(0, 6);
    function renderHeader() {
        return (
            <View style={style.headerWrapper}>
                <WelcomeUser />
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

        const renderMajorItem: ListRenderItem<HomeEntriesItemProps> = ({ item }) => (
            <View style={{ flex: 1, flexDirection: 'row', marginRight: MSIZES.padding }}>
                <Text style={{ ...MFONTS.body4 }}>{item.title}</Text>
                <Text style={{ ...MFONTS.body4, paddingLeft: 8 }}>${item.value}</Text>
            </View>
        );

        return (
            <FlatList
                ListHeaderComponent={BannerHeader}
                data={majorExpenseList}
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

    function renderEntries() {
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

        const renderItem: ListRenderItem<HomeEntriesItemProps> = ({ item }) => (
            <View style={style.recentEntriesItemWrapper}>
                <View>
                    <Text style={{ ...MFONTS.body3 }}>{item.title}</Text>
                    <Text>{item.date}</Text>
                </View>
                <Text style={{ ...MFONTS.h3, color: MCOLORS.emerald }}>${item.value}</Text>
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

    return <Layout>{renderEntries()}</Layout>;
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
        backgroundColor: 'white',

        shadowColor: MCOLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
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
        shadowColor: MCOLORS.black,
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
    buttonClose: {
        backgroundColor: MCOLORS.blue,
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

export default HomeScreen;