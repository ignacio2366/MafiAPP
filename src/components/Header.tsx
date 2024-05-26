import { Text, View } from "react-native"
import { backgrounds, colors, fonts, layouts, padding, size, textalign } from "../themes"

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
                    padding.paddingVertical_14px,
                ]
            }
        >
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
        </View>
    )
}