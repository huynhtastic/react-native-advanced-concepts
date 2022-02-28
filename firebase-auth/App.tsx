import { initializeApp } from "firebase/app";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { SignInForm } from "./components/SignInForm";
import { SignUpForm } from "./components/SignUpForm";
import { firebaseConfig } from "./firebaseConfig";

export default function App() {
  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);

  return (
    <View style={styles.container}>
      <SignUpForm />
      <SignInForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
