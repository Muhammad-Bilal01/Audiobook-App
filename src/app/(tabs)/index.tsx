import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, FlatList } from 'react-native';
import books from "@/dummyBooks";
import BookListItem from "@/components/BookListItem";

export default function App() {
  return (
    <FlatList
      data={books}
      contentContainerClassName="gap-4 px-4" // parent list styling
      renderItem={({ item }) => (<BookListItem book={item} />)}
    />
  );
}
