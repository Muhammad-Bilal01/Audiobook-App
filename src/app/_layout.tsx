import "./../../global.css"
import { Slot } from "expo-router";
import { ThemeProvider, DarkTheme } from '@react-navigation/native'
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import PlayerProvider from "./providers/PlayerProvider";


const theme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: "#1E293B",
        card: "#1E293B",
        primary: "white"
    }
}

export default function RootLayout() {
    return <ThemeProvider value={theme}>
        <ClerkProvider tokenCache={tokenCache}>
            <PlayerProvider>
                <Slot />
            </PlayerProvider>
        </ClerkProvider>
    </ThemeProvider>
}