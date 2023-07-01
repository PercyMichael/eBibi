import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Post from "../components/Post";

export default function Home() {
  return (
    <View>
      <Post />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
});
