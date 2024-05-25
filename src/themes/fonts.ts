import { TextStyle } from "react-native";

// export const generateFontSizes = () => {
//     return config.fonts.sizes.reduce((acc, size) => {
//         return Object.assign(acc, {
//             [`size_${size}`]: {
//                 fontSize: size,
//             },
//         });
//     }, {} as FontSizes);
// };
export const fonts = {
    bold: {
        fontWeight: 'bold',
    },
    uppercase: {
        textTransform: 'uppercase',
    },
    capitalize: {
        textTransform: 'capitalize',
    },
    alignCenter: {
        textAlign: 'center',
    },
    fontRegular: {
        fontFamily: 'SF-Pro-Display-Regular',
    },
    fontMedium: {
        fontFamily: 'SF-Pro-Display-Medium',
    },
    fontSemiBold: {
        fontFamily: 'SF-Pro-Display-Semibold',
    },
    fontBold: {
        fontFamily: 'SF-Pro-Display-Bold',
    },
    fontBlack: {
        fontFamily: 'SF-Pro-Display-Black',
    },

} as const satisfies Record<string, TextStyle>;

export const size = {
    font_size_2: { fontSize: 2 },
    font_size_8: { fontSize: 8 },
    font_size_12: { fontSize: 12 },
    font_size_16: { fontSize: 16 },
    font_size_20: { fontSize: 20 },
    font_size_24: { fontSize: 24 },
    // ... add more sizes as needed
} as const satisfies Record<string, TextStyle>;