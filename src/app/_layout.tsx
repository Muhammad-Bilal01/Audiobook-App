import "./../../global.css"
import { Slot } from "expo-router";
import { ThemeProvider, DarkTheme } from '@react-navigation/native'


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
        <Slot />
    </ThemeProvider>
}