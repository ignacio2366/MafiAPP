import { Dimensions, TextStyle, ViewStyle } from 'react-native';

import { staticColor } from './colors';

export const border = {
  borderRadius_2: { borderRadius: 2 },
  borderRadius_4: { borderRadius: 4 },
  borderRadius_6: { borderRadius: 6 },
  borderRadius_8: { borderRadius: 8 },
  borderRadius_10: { borderRadius: 10 },
  borderRadius_12: { borderRadius: 12 },
  borderRadius_14: { borderRadius: 14 },
  borderRadius_16: { borderRadius: 16 },
  borderRadius_18: { borderRadius: 18 },
  borderRadius_20: { borderRadius: 20 },
  // ... add more as needed
} as const satisfies Record<string, ViewStyle>;
