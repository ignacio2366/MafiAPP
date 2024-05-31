import { ScrollView, Text, View } from 'react-native';
import { useState } from 'react';
import { LoadingModal } from '../components/LoadingModal';
import { CardLabel, Header } from '../components';
import {
  backgrounds, border, colors, layouts, margin, padding, style,
} from '../themes';

export function HomeScreen() {
  const [loading, setLoading] = useState<boolean>(false);
  return (<>
        <LoadingModal loading={false} />
        <Header />
        <ScrollView style={[backgrounds.cherry]}>

            <View
                style={[
                  backgrounds.black,
                  margin.marginTop_25,
                  padding.paddingHorizontal_15,
                  padding.paddingVerical_32px,
                  style.containerViewHome,
                  layouts.itemsCenter,
                  layouts.justifyStart,
                  layouts.fullHeightScreen,
                ]}
            >
                <CardLabel title="Project Handled" />
            </View>
        </ScrollView>
    </>
  );
}
