import { PixelRatio, TextStyle } from "react-native";

// export const generateFontSizes = () => {
//     return config.fonts.sizes.reduce((acc, size) => {
//         return Object.assign(acc, {
//             [`size_${size}`]: {
//                 fontSize: size,
//             },
//         });
//     }, {} as FontSizes);
// };

const pixel = PixelRatio.getFontScale();
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
    font_size_2: { fontSize: 2 / pixel },
    font_size_8: { fontSize: 8 / pixel },
    font_size_12: { fontSize: 12 / pixel },
    font_size_16: { fontSize: 16 / pixel },
    font_size_20: { fontSize: 20 / pixel },
    font_size_24: { fontSize: 24 / pixel },
    font_size_32: { fontSize: 32 / pixel },

} as const satisfies Record<string, TextStyle>;

export const textalign = {
    textRight: { textAlign: 'right' }
} as const satisfies Record<string, TextStyle>;