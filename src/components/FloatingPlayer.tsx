import { Text, View, Image, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import dummyBooks from '@/dummyBooks';
import { usePlayer } from '@/app/providers/PlayerProvider';
import { useAudioPlayerStatus } from 'expo-audio';


type Book = {
    id: string,
    title: string,
    author: string,
    audio_url: string,
    thumbnail_url?: string
}

type FloatingPlayerProps = {
    book: Book
}

export default function FloatingPlayer() {

    const { player, book } = usePlayer()
    const playerStatus = useAudioPlayerStatus(player)

    if (!book) return null


    return (
        <Link href={"/player"} asChild>
            <Pressable className="flex-row items-center px-4 p-2 gap-4 bg-slate-900">
                <Image source={{ uri: book.thumbnail_url }} className="w-[20%] aspect-square rounded-md" />

                <View className="flex-1 gap-1">
                    <Text className="text-xl text-gray-100 font-bold">{book.title}</Text>
                    <Text className="text-gray-400">{book.author}</Text>
                    <View className='flex-1'></View>
                </View>
                <AntDesign onPress={() => playerStatus.playing ? player.pause() : player.play()} name={playerStatus.isBuffering ? "loading1" : playerStatus.playing ? "pausecircleo" : "playcircleo"} size={20} color={'gainsboro'} />
            </Pressable>
        </Link>
    );
}
