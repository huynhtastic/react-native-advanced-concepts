import axios from "axios";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import firebaseAuth, { getAuth } from "firebase/auth";

const BASE_URL =
  "https://us-central1-one-time-password-1083b.cloudfunctions.net";

const handleSubmit = async (phone: string, code: string) => {
  try {
    const res = await axios.post(
      "verifyOtp",
      { phone, code },
      { baseURL: BASE_URL }
    );

    firebaseAuth.signInWithCustomToken(getAuth(), res.data.token);
  } catch (e) {
    console.log(e);
  }
};

export const SignInForm: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  return (
    <>
      <Input
        value={phone}
        onChangeText={setPhone}
        style={styles.formControl}
        placeholder="Enter Phone Number"
      />
      <Input
        value={code}
        onChangeText={setCode}
        style={styles.formControl}
        placeholder="Enter Code"
      />
      <Button onPress={() => handleSubmit(phone, code)} title="Submit" />
    </>
  );
};

const styles = StyleSheet.create({
  formControl: { marginBottom: 10 },
});
