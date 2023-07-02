import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { supabase } from "../lib/supabase";

const Upload = () => {
  const pickVideo = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({ type: "video/*" });

      if (res.type === "success") {
        //UPLOAD
        const { uri } = res;

        const response = await fetch(uri);

        const blob = await response.blob();

        const { data, error } = await supabase.storage
          .from("posts")
          .upload("destination/path/filename.mp4", blob);

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
    <View>
      <Button title="Select Video" onPress={pickVideo} />
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({});
