import { ViewStyle, TextStyle } from "react-native";
import { staticColor } from "./colors";


export const style = {
    containerViewLogin: {
        flex: 1,
        borderTopEndRadius: 46,
        borderTopStartRadius: 46,

    },
    containerViewHome: {
        flex: 1,
        borderTopEndRadius: 12,
        borderTopStartRadius: 12,

    },
    input: {
        height: 40,
        backgroundColor: staticColor.white,
        width: "100%",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: staticColor.black,
        color: staticColor.black,
        paddingLeft: 8,

    },
    border_white_1: {
        borderColor: staticColor.white,
        borderWidth: 1,
    },
    border_white_4: {
        borderColor: staticColor.white,
        borderWidth: 4,
    }
} as const satisfies Record<string, ViewStyle | TextStyle>;