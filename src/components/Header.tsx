import { Text, View } from "react-native"
import { backgrounds, colors, fonts, layouts, margin, padding, size, textalign } from "../themes"
import { TouchableOpacity } from "react-native-gesture-handler"
import IcOrangeBox from "../themes/assets/svg/ic-orangebox.svg"
export const Header = () => {
    return (
        <View
            style={
                [

                    layouts.row,
                    backgrounds.dark,
                    layouts.justifyBetween,
                    layouts.itemsCenter,
                    padding.paddingHorizontal_15px,
                    padding.paddingTop_50px,

                ]
            }
        >
            <TouchableOpacity>
                <IcOrangeBox height={36} />
            </TouchableOpacity>
            <Text
                style={
                    [colors.white,
                    layouts.itemsEnd,
                    fonts.fontRegular,
                    size.font_size_12,
                    textalign.textRight
                    ]
                }
            >
                Showcasing my coding structure
            </Text>
            <Text
                style={
                    [colors.white,
                    layouts.w48_px,
                    layouts.itemsStart,
                    fonts.fontBlack,
                    size.font_size_12,
                    ]
                }
            >
                Mark Angelo Ignacio Mobile
            </Text>
        </View>
    )
}