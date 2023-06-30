import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Details = () => {
  return (
    <View style={styles.details}>
      <View style={{ width: "85%" }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Nude Patricia
        </Text>

        <Text style={{ color: "white" }}>
          The business model canvas is a great tool to help you understand a
          business model in a straightforward, structured way.
        </Text>
      </View>
      <View
        style={{
          width: "15%",
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
  );
};

export default Details;

const styles = StyleSheet.create({
  details: {
    backgroundColor: "transparent",
    padding: 15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
