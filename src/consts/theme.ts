import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const MCOLORS = {
    primary: '#7F5DF0', // Light purple
    secondary: '#5D2DFD', // Dark purple

    white: '#fff',
    black: '#1E1F20',
    green: '#21E582',
    red: '#F9A8BA',
    gray: '#6A6A6A',
    lightGray: '#dbdbdb',
    lightGray1: '#f5f6fa',
    lightGreen: '#E6FEF0',

    lime: '#00BA63',
    emerald: '#2BC978',
};
export const MSIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height,
};
export const MFONTS = {
    h1: { fontFamily: 'Roboto-Black', fontSize: MSIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'Roboto-Bold', fontSize: MSIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'Roboto-Bold', fontSize: MSIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'Roboto-Bold', fontSize: MSIZES.h4, lineHeight: 22 },
    body1: { fontFamily: 'Roboto-Regular', fontSize: MSIZES.body1, lineHeight: 36 },
    body2: { fontFamily: 'Roboto-Regular', fontSize: MSIZES.body2, lineHeight: 30 },
    body3: { fontFamily: 'Roboto-Regular', fontSize: MSIZES.body3, lineHeight: 22 },
    body4: { fontFamily: 'Roboto-Regular', fontSize: MSIZES.body4, lineHeight: 22 },
    body5: { fontFamily: 'Roboto-Regular', fontSize: MSIZES.body5, lineHeight: 22 },
};

const appTheme = { MCOLORS, MSIZES, MFONTS };

export default appTheme;
