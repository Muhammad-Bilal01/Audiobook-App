import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TasbLayout() {
    return <Tabs screenOptions={{
        tabBarShowLabel: false,
    }}>
        <Tabs.Screen name="index" options={{
            title: "Library",
            tabBarIcon: ({ size, color }) => <Ionicons name="library" size={size} color={color} />

        }} />
        <Tabs.Screen name="discover" options={{
            title: "Discover",
            tabBarIcon: ({ size, color }) => <Ionicons name="search" size={size} color={color} />
        }} />
    </Tabs>;
}