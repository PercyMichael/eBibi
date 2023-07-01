import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { Video, ResizeMode } from "expo-av";
import { useRef, useState } from "react";
import Post from "./Stats";

const Post = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() =>
          status.isPlaying
            ? video.current.pauseAsync()
            : video.current.playAsync()
        }
      >
        {/* https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4 */}
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://nizhbhxgsuggdsfyfyab.supabase.co/storage/v1/object/public/posts/test.mp4?t=2023-07-01T06%3A09%3A32.393Z",
          }}
          useNativeControls={false}
          resizeMode={ResizeMode.COVER}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </TouchableWithoutFeedback>

      <Stats />
      <Details />
    </>
  );
};

export default Post;

const styles = StyleSheet.create({
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
