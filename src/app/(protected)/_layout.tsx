import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function ProtectedLayout() {


    const { isLoaded, isSignedIn } = useAuth()

    // if is loading...
    if (!isLoaded) {
        return (<View className="flex-1 justify-center items-center"><ActivityIndicator /></View>);
    }


    // If user not sign in redirect to sign in page
    if (!isSignedIn) {
        return <Redirect href="/sign-in" />
    }


    return <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="player" options={{ headerShown: false, animation: "fade_from_bottom" }} />
    </Stack>
}