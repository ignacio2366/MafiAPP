import React from 'react';
import { Modal, Text, View } from 'react-native';

import {
  backgrounds, layouts, fonts, size, colors,
} from '../../themes';

interface Props {
  loading: boolean
}
export const LoadingModal = ({ loading }: Props) => (
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
