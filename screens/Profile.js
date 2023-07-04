import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Button } from "react-native-paper";

const Profile = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    if (session) {
      getProfile();
      console.log("already loged in");
    }
  }, []);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setUsername(data?.username);
        console.log("data is here :", data);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function getResults(params) {
    let { data: posts, error } = await supabase.from("posts").select("*");

    if (error) {
      console.log("my error", error);
    }

    if (data) {
      console.log("my data", data);
    }
  }

  return (
    <View>
      <Text>Profiles </Text>
      <Text>
        {session && session?.user ? "Hi " : "Hey"}
        {username}
      </Text>
      <Text>{session?.user?.email}</Text>

      <View style={styles.verticallySpaced}>
        <Button mode="elevated" onPress={() => supabase.auth.signOut()}>
          Sign Out
        </Button>

        <Button mode="elevated" onPress={() => getResults()}>
          Get Data
        </Button>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
