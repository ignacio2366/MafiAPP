import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens";
import { NavigationParamList } from "../types/navigation.ts";

const Stack = createStackNavigator<NavigationParamList>();

export function Navigations() {
    return (
        < NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}
