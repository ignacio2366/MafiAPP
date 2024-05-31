import { Text, View } from 'react-native';
import {
  backgrounds, border, colors, fonts, layouts, padding, size, staticColor,
} from '../../themes';

interface Props {
  title: string
}
export const CardLabel = ({ title }: Props) => (
        <View
            style={[
              padding.paddingVertical_14px,
              padding.paddingHorizontal_24px,
              backgrounds.gray,
              border.borderRadius_20,
              { borderWidth: 4, borderColor: staticColor.white },
            ]}
        >
            <Text
                style={[
                  layouts.w120_px,
                  colors.white,
                  fonts.fontBlack,
                  fonts.uppercase,
                  fonts.alignCenter,
                  size.font_size_24,
                ]}
            >
                {title}
            </Text>
        </View>
);
