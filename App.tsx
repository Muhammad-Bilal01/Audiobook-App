import "./global.css"

import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import books from "./src/dummyBooks";
import AntDesign from '@expo/vector-icons/AntDesign';
import BookListItem from "./src/components/BookListItem";

export default function App() {
  return (
    <View className="bg-slate-800 flex-1 justify-center p-4">

      {/* Book Row */}
      <BookListItem book={books[0]} />
      <BookListItem book={books[1]} />
      <BookListItem book={books[2]} />

      {/* Status Bar */}
      <StatusBar style="light" />
    </View>
  );
}
