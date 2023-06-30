import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useRef, useState } from "react";
import Details from "../components/Details";
import Stats from "../components/Stats";

export default function Home() {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() =>
          status.isPlaying
            ? video.current.pauseAsync()
            : video.current.playAsync()
        }
      >
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls={false}
          resizeMode={ResizeMode.COVER}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </TouchableWithoutFeedback>
      <Stats />
      <Details />
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
  video: {
    position: "absolute",
    alignSelf: "center",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
  },
});
