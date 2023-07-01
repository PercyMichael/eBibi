import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  StatusBar,
} from "react-native";
import React from "react";
import { Video, ResizeMode } from "expo-av";
import { useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const Post = ({ title, source, views }) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View style={styles.videocontainer}>
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
            uri: source,
          }}
          useNativeControls={false}
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </TouchableWithoutFeedback>

      {/* Stats */}

      <View style={styles.stats}>
        <View style={{ alignItems: "center" }}>
          <AntDesign name="eye" size={40} color="white" />
          <Text style={{ color: "white", fontSize: 16 }}>{views}</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <AntDesign name="star" size={40} color="white" />
          <Text style={{ color: "white", fontSize: 16 }}>59</Text>
        </View>
      </View>
      {/* end stats */}

      {/* Detials */}
      <View style={styles.details}>
        <View style={{ width: "85%" }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            {title}
          </Text>

          <Text style={{ color: "white" }}>
            The business model canvas is a great tool to help you understand a
            business model in a straightforward, structured way.
          </Text>
        </View>
        <View
          style={{
            width: "20%",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              borderColor: "white",
              borderStyle: "dashed",
              borderWidth: 4,
              width: 50,
              height: 50,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>2018</Text>
          </View>
        </View>
      </View>
      {/* end post detail */}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  videocontainer: {
    justifyContent: "flex-end",

    height: Dimensions.get("window").height - StatusBar.currentHeight,
  },
  stats: {
    justifyContent: "space-around",

    paddingHorizontal: 10,
    alignSelf: "flex-end",
    height: "22%",
  },

  details: {
    backgroundColor: "transparent",
    paddingHorizontal: 15,
    paddingBottom: 30,

    justifyContent: "space-between",
    flexDirection: "row",
  },

  video: {
    position: "absolute",
    alignSelf: "center",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
