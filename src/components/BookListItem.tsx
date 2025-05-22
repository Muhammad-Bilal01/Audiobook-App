import { Text, View, Image, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';


type Book = {
    id: string,
    title: string,
    author: string,
    audio_url: string,
    thumbnail_url?: string
}

type BookListItemProps = {
    book: Book
}

export default function BookListItem({ book }: BookListItemProps) {
    return (
        <Link href={"/player"} asChild>
            <Pressable className="flex-row items-center gap-4">
                <Image source={{ uri: book.thumbnail_url }} className="w-24 aspect-square rounded-md" />

                <View className="flex-1 gap-1">
                    <Text className="text-xl text-gray-100 font-bold">{book.title}</Text>
                    <Text className="text-gray-400">{book.author}</Text>
                    <View className='flex-1'></View>
                </View>
                <AntDesign name="playcircleo" size={20} color={'gainsboro'} />
            </Pressable>
        </Link>
    );
}
