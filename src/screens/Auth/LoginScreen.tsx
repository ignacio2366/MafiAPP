import { Text, View } from 'react-native';
import { colors, fonts, size, layouts, backgrounds } from '../../themes';

export function LoginScreen() {

    return (
        <View style={[]}>
            <Text
                style={[
                    colors.orange,
                    fonts.fontBlack,
                    backgrounds.black,
                    size.font_size_16,
                ]}>
                Login Screen
            </Text>
        </View>
    );
}
