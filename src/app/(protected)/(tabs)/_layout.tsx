import { Redirect, Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useAuth } from "@clerk/clerk-expo";
import { ActivityIndicator, Text, View } from "react-native";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import FloatingPlayer from "@/components/FloatingPlayer";

export default function TasbLayout() {
    return <Tabs
        tabBar={(props) => <>
            <FloatingPlayer />
            <BottomTabBar {...props} />
        </>
        }
    >
        <Tabs.Screen name="index" options={{
            title: "Library",
            tabBarIcon: ({ size, color }) => <Ionicons name="library" size={size} color={color} />

        }} />
        <Tabs.Screen name="discover" options={{
            title: "Discover",
            tabBarIcon: ({ size, color }) => <Ionicons name="search" size={size} color={color} />
        }} />
        <Tabs.Screen name="profile" options={{
            title: "Profile",
            tabBarIcon: ({ size, color }) => <FontAwesome name="user-circle-o" size={size} color={color} />
        }} />
    </Tabs>;
}