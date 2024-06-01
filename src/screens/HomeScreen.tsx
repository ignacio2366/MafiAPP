import { ScrollView, View } from 'react-native';

import { LoadingModal, Header, CardLabel } from '../components';
import {
  backgrounds, layouts, margin, padding, style,
} from '../themes';

export const HomeScreen = () => (<>
        <LoadingModal loading={false} />
        <Header />
        <ScrollView style={[backgrounds.cherry]}>

            <View
                  style={[
                    backgrounds.black,
                    margin.marginTop_25, padding.paddingHorizontal_15,
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
