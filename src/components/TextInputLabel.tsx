import { forwardRef } from 'react';
import { Text, TextInput, View } from 'react-native';

interface InputProps {
  label: string,
  type: string,

}

const TextInputLabel = forwardRef<TextInput, InputProps>(
  ({ label, ...textInputProps }, ref) => (
            <View >
                <Text >{label}</Text>
                <TextInput ref={ref} {...textInputProps} placeholder={label} value="" />
            </View>
  ),

);
export default { TextInputLabel };
