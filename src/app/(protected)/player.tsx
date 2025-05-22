import { Image, Pressable, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";
import dummyBooks from "@/dummyBooks";
import { SafeAreaView } from "react-native-safe-area-context";
import PlaybackBar from "@/components/PlaybackBar";

export default function Player() {
    const book = dummyBooks[0]
    return (
        <SafeAreaView className="flex-1 bg-slate-950 p-4 pt-20 gap-4 ">
            <Pressable className="absolute top-12 left-4 bg-gray-800 rounded-full p-2"
                onPress={() => router.back()}
            >
                <Ionicons name="chevron-down" size={24} color="white" />
            </Pressable>

            {/* Thumbnail */}
            <Image source={{ uri: book.thumbnail_url }} className="w-[95%] aspect-square rounded-[30px] self-center" />

            <View className="flex-1 gap-4 justify-end">

                {/* Title */}
                <Text className="text-2xl text-white text-center">{book.title}</Text>

                {/* Player Bar */}
                <PlaybackBar value={0.1} />

                {/* Player Control Button */}
                <View className='flex-row items-center justify-between mt-8'>
                    <Ionicons name='play-skip-back' size={24} color='white' />
                    <Ionicons name='play-back' size={24} color='white' />
                    <Ionicons name='play' size={50} color='white' />
                    <Ionicons name='play-forward' size={24} color='white' />
                    <Ionicons name='play-skip-forward' size={24} color='white' />
                </View>
            </View>

        </SafeAreaView>
    );
}