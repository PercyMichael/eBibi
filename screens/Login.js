import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { supabase } from "../lib/supabase";

import {
  Badge,
  Button,
  TextInput,
  IconButton,
  MD3Colors,
} from "react-native-paper";
import { Session } from "@supabase/supabase-js";
import { Text } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
    } else {
      console.log("logged in");
    }
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.log(error, "hhhh");
      Alert.alert(error.message);
    }
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          mode="outlined"
          label="Email"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          mode="outlined"
          label="Password"
          onChangeText={(text) => setPassword(text)}
          right={<TextInput.Icon icon="eye" />}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => signInWithEmail()}
          disabled={loading}
        >
          Sign In
        </Button>
      </View>
      <View style={styles.verticallySpaced}>
        <Button
          mode="outlined"
          disabled={loading}
          onPress={() => signUpWithEmail()}
        >
          Sign up
        </Button>
      </View>

      <View>
        <Text>{session && session?.user ? "Hi" : "Hey"}</Text>
        <Text>{session?.user?.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});
