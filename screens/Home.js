import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  StatusBar,
} from "react-native";
import Post from "../components/Post";
import { supabase } from "../lib/supabase";
import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const CDN_URL =
    "https://nizhbhxgsuggdsfyfyab.supabase.co/storage/v1/object/public/posts/";
  data = [
    {
      id: 2,
      title: "Fudchef",
      source: `${CDN_URL}test.mp4`,
      views: 96,
    },
  ];

  async function getAllFiles() {
    try {
      // Call the Supabase Storage API to get all files in the public bucket
      const { data, error } = await supabase.storage
        .from("posts") // Specify the public bucket
        .list(""); // Retrieve a list of files

      if (error) {
        throw error;
      }

      // Process the retrieved files
      console.log("Files in the public bucket:");
      data.forEach((file) => {
        console.log(file.name);
      });
    } catch (error) {
      console.error("Error retrieving files:", error.message);
    }
  }

  getAllFiles();

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
