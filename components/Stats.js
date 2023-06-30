import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Stats = () => {
  return (
    <View style={styles.stats}>
      <View style={{ alignItems: "center" }}>
        <AntDesign name="eye" size={40} color="white" />
        <Text style={{ color: "white", fontSize: 16 }}>23</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <AntDesign name="star" size={40} color="white" />
        <Text style={{ color: "white", fontSize: 16 }}>59</Text>
      </View>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  stats: {
    justifyContent: "space-around",

    padding: 10,
    alignSelf: "flex-end",
    height: "22%",
  },
});
