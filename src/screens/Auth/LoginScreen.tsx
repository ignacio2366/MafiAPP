import { useCallback } from 'react';
import {
  Text, TextInput, View,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../store';
import { Button, Header } from '../../components';
import {
  layouts, backgrounds, margin, style, fonts, size, colors, padding,
} from '../../themes';
import { StackNavigation } from '../../types';

interface Props {
  navigation: StackNavigation;
}
export function LoginScreen({ navigation }: Props) {
  const { fullname } = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    navigation.navigate('Home');
    // const payload: UserT = { user_id: 1, fullname: "sad", email: "SAD", user_type: "" }
    // dispatch(setUser(payload))
  }, []);
  return (
    <>
      <Header />
      <View style={[layouts.flex_1, backgrounds.cherry]}>
        <Text
          style={[
            fonts.alignCenter,
            fonts.fontMedium,
            size.font_size_32,
            colors.white,

          ]}
        > Welcome</Text>
        <View
          style={[
            backgrounds.gray,
            margin.marginTop_25,
            padding.paddingHorizontal_15,
            style.containerViewLogin,
            layouts.itemsCenter,
            layouts.justifyCenter,
          ]}
        >
          <Text
            style={[
              fonts.fontBlack,
              size.font_size_32,
              colors.white,
            ]}
          >
            LoginScreen
          </Text>
          <View style={[layouts.flex_0_5, layouts.fullWidth, margin.marginVert_15]}>
            <Text
              style={[
                fonts.fontRegular,
                size.font_size_20,
                layouts.selfLeft,
                colors.white,
                margin.margingVertical_14px,
              ]}
            >username</Text>
            <TextInput style={[style.input, fonts.fontRegular, size.font_size_16]} placeholder='' />

            <Text
              style={[
                fonts.fontRegular,
                size.font_size_20,
                layouts.selfLeft,
                colors.white,
                margin.margingVertical_14px,
              ]}
            >password</Text>
            <TextInput style={[style.input, fonts.fontRegular, size.font_size_16]} placeholder='' secureTextEntry />
          </View>
          <Button label={'Login'} onPress={onSubmit} />
        </View>
      </View>
    </>
  );
}
