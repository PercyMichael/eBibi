import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import * as DocumentPicker from "expo-document-picker";
import { supabase } from "../lib/supabase";
import mime from "mime";
import { Badge, TextInput, IconButton, MD3Colors } from "react-native-paper";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const MAX_FILE_SIZE = 200 * 1024 * 1024;

  const pickVideo = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({ type: "video/mp4" });

      if (res.type === "success") {
        //UPLOAD
        const { uri, size } = res;

        if (size > MAX_FILE_SIZE) {
          console.log("File size exceeds the maximum limit of 200MB.");
          return;
        }

        setSelectedImage(res.uri);

        // Adjust imageUri format for Android
        if (Platform.OS === "android") {
          imageUri = `file:///${uri.split("file:/").join("")}`;
        }

        const currentDate = new Date().toISOString().replace(/[-:.TZ]/g, "");
        const fileName = `${currentDate}`;

        const formData = new FormData();
        formData.append("image", {
          uri: imageUri,
          type: mime.getType(imageUri),
          name: `${fileName}.${mime.getExtension(mime.getType(imageUri))}`,
        });

        const { data, error } = await supabase.storage
          .from("posts")
          .upload(
            `${fileName}.${mime.getExtension(mime.getType(imageUri))}`,
            formData
          );

        if (error) {
          console.error("Error uploading video:", error);
        } else {
          console.log("Video uploaded successfully:", data);
        }
      } else {
        console.log("User cancelled the video picker");
      }
    } catch (error) {
      console.log("Error selecting video:", error);
    }
  };

  return (
    <View
      style={{
        margin: 20,
        justifyContent: "center",

        flex: 1,
      }}
    >
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200 }}
        />
      )}

      <Button icon="camera" mode="outlined" onPress={pickVideo}>
        Select Video
      </Button>

      <TextInput
        mode="outlined"
        label="Title"
        onChangeText={(text) => setText(text)}
        right={<TextInput.Icon icon="eye" />}
      />
      <TextInput
        multiline
        numberOfLines={4}
        mode="outlined"
        label="About"
        onChangeText={(text) => setText(text)}
      />
      <Button icon="camera" mode="contained">
        Upload & Save
      </Button>

      {/* <Button title="Select Video" onPress={pickVideo} /> */}
      <Badge>3</Badge>
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({});
