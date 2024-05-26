import { Dimensions, TextStyle, ViewStyle } from 'react-native';

const { width, height } = Dimensions.get('window');

export const layouts = {
    col: {
        flexDirection: 'column',
    },
    colReverse: {
        flexDirection: 'column-reverse',
    },
    wrap: {
        flexWrap: 'wrap',
    },
    row: {
        flexDirection: 'row',
    },
    rowReverse: {
        flexDirection: 'row-reverse',
    },
    itemsCenter: {
        alignItems: 'center',
    },
    itemsStart: {
        alignItems: 'flex-start',
    },
    itemsStretch: {
        alignItems: 'stretch',
    },
    itemsEnd: {
        alignItems: 'flex-end',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    justifyAround: {
        justifyContent: 'space-around',
    },
    justifyBetween: {
        justifyContent: 'space-between',
    },
    justifyEnd: {
        justifyContent: 'flex-end',
    },
    justifyStart: {
        justifyContent: 'flex-start',
    },
    /* Sizes Layouts */
    flex_0: {
        flex: 0,
    },
    flex_0_5: {
        flex: 0.5,
    },
    flex_1: {
        flex: 1,
    },
    flex_2: {
        flex: 2,
    },
    flex_3: {
        flex: 3,
    },
    grow_1: {
        flexGrow: 1,
    },
    fullWidth: {
        width: '100%',
    },
    fullHeight: {
        height: '100%',
    },
    fullWidthScreen: {
        width,
    },
    fullHeightScreen: {
        height,
    },
    /* Positions */
    relative: {
        position: 'relative',
    },
    absolute: {
        position: 'absolute',
    },
    top_negative_20_percent: {
        top: '-20%',
    },
    top0: {
        top: 0,
    },
    bottom0: {
        bottom: 0,
    },
    left0: {
        left: 0,
    },
    right0: {
        right: 0,
    },
    z1: {
        zIndex: 1,
    },
    z10: {
        zIndex: 10,
    },
    /* widths */
    minWidth: {
        minWidth: 40,
    },
    w60_px: {
        width: 60,
    },
    w90_px: {
        width: 90,
    },
    w48_px: {
        width: 48,
    },
    w98_px: {
        width: 98,
    },
    w120_px: {
        width: 120,
    },
    w150_px: {
        width: 150,
    },
    w30: {
        width: '30%',
    },
    w40: {
        width: '40%',
    },
    w50: {
        width: '50%',
    },
    w70: {
        width: '70%',
    },
    w80: {
        width: '80%',
    },
    w90: {
        width: '90%',
    },
    /* heights */
    minHeight: {
        minHeight: 400,
    },
    h1: {
        height: 1,
    },
    h32_px: {
        height: 32,
    },
    h40_px: {
        height: 40,
    },
    h45_px: {
        height: 45,
    },
    h50_px: {
        height: 50,
    },
    h55_px: {
        height: 55,
    },
    h60_px: {
        height: 60,
    },
    h80_px: {
        height: 80,
    },
    h100_px: {
        height: 100,
    },
    h80: {
        height: '80%',
    },
    h50Screen: {
        height: height * 0.5,
    },
    h60Screen: {
        height: height * 0.6,
    },
    h80Screen: {
        height: height * 0.8,
    },
    h100: {
        height: 100,
    },
    h200: {
        height: 200,
    },
    h257: {
        height: 257,
    },
    h275: {
        height: 275,
    },
    h300: {
        height: 300,
    },
    h325: {
        height: 325,
    },
    h350: {
        height: 350,
    },
    h375: {
        height: 375,
    },
    top20: {
        marginTop: '20%',
    },
    top30: {
        marginTop: '30%',
    },
    top40: {
        marginTop: '40%',
    },
    top50: {
        marginTop: '50%',
    },
    /* texts */
    textAlignCenter: {
        textAlign: 'center',
    },
    selfLeft: {
        alignSelf: 'flex-start',
    },
    selfCenter: {
        alignSelf: 'center',
    },
    selfEnd: {
        alignSelf: 'flex-end',
    },
    hiddenOverflow: {
        overflow: 'hidden',
    },
    /* opacities */
    opacity_20: {
        opacity: 0.2,
    },
    opacity_90: {
        opacity: 0.8,
    },
} as const satisfies Record<string, ViewStyle | TextStyle>;
