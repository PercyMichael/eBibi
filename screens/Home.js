import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  StatusBar,
} from "react-native";
import Post from "../components/Post";
import { supabase } from "../lib/supabase";

export default function Home() {
  data = [
    {
      id: 1,
      title: "Bunny1",
      source: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      views: 1000,
    },
    {
      id: 2,
      title: "Fudchef",
      source:
        "https://nizhbhxgsuggdsfyfyab.supabase.co/storage/v1/object/public/posts/test.mp4?t=2023-07-01T06%3A09%3A32.393Z",
      views: 96,
    },
    {
      id: 3,
      title: "Bunny",
      source: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      views: 2500,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Post title={item.title} source={item.source} views={item.views} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate={"fast"}
        snapToInterval={
          Dimensions.get("window").height - StatusBar.currentHeight
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
});
