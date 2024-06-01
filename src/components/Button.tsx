import { Text, TouchableOpacity, View } from 'react-native';

import {
  backgrounds, border, colors, fonts, layouts, padding, size, style,
} from '../themes';

interface ButtonProps {
  label: string;
  onPress: () => void;
}
export const Button = ({ label, onPress }: ButtonProps) => (
        <TouchableOpacity onPress={onPress}>
            <View style={[layouts.w150_px, padding.paddingVertical_6px,
              backgrounds.orange,
              border.borderRadius_16, style.border_white_4]}>
                <Text
                    style={
                        [
                          fonts.alignCenter,
                          fonts.fontRegular,
                          size.font_size_16,
                          colors.white,
                        ]
                    }
                >{label}</Text>
            </View>
        </TouchableOpacity>
);
