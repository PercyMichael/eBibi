import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Button } from "react-native-paper";

const Profile = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    if (session) getProfile();

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
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
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <View>
      <Text>{session && session?.user ? "Hi" : "Hey"}</Text>
      <Text>
        {session?.user?.email} {username || "fff"}
      </Text>

      <View>
        <Button mode="outlined" onPress={() => supabase.auth.signOut()}>
          Sign Out
        </Button>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
