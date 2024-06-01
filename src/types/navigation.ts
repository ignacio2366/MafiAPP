import type {
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';

export type NavigationParamList = {
  Login: undefined;
  Home: undefined;
};

export type NavigationStackProps = StackScreenProps<NavigationParamList>;
export type StackNavigation = StackNavigationProp<NavigationParamList>;
