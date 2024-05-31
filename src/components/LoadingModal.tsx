import { Modal, Text, View } from 'react-native';
import {
  backgrounds, colors, fonts, layouts, size,
} from '../themes';
import IcYellowBox from '../themes/assets/svg/ic-orangebox.svg';

interface Props {
  loading: boolean
}
const LoadingModal = ({ loading }: Props) => (
        <Modal
            visible={loading}
            animationType="fade"
        >
            <View style={[
              layouts.flex_1,
              layouts.justifyCenter,
              layouts.itemsCenter,
              layouts.fullHeight,
              backgrounds.cherry,
              { gap: 50 },

            ]}>
                <Text
                    style={[
                      layouts.w98_px,
                      fonts.fontBlack,
                      size.font_size_24,
                      colors.white,
                      { lineHeight: 24 },
                    ]}
                >
                    Mark Angelo Ignacio Mobile
                </Text>
                <IcYellowBox />
                <Text
                    style={
                        [
                          fonts.fontRegular,
                          fonts.alignCenter,
                          colors.white,
                          size.font_size_32,

                        ]
                    }
                >Showcasing my coding structure</Text>
            </View>
        </Modal>
);
export default LoadingModal;
