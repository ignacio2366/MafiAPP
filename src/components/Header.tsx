import { Text, View } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  backgrounds, colors, fonts, layouts, padding, size, textalign,
} from '../themes/index';

import IcOrangeBox from '@/themes/assets/svg/orangebox.svg';

export const Header = () => (
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
                      textalign.textRight,
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
);
