import { forwardRef } from "react"
import { Text, TextInput, View } from "react-native"
interface InputProps {
    label: string,
    type: string,

}

export const TextInputLabel = forwardRef<TextInput, InputProps>(
    ({ label, ...textInputProps }, ref) => {
        return (
            <View >
                <Text >{label}</Text>
                <TextInput ref={ref} {...textInputProps} placeholder={label} value="" />
            </View>
        )
    }

)