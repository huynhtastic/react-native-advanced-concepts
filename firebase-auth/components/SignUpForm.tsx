import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";

const BASE_URL =
  "https://us-central1-one-time-password-1083b.cloudfunctions.net";

const handleSubmit = async (phone: string) => {
  await axios.post("createUser", { phone }, { baseURL: BASE_URL });
  await axios.post("requestOtp", { phone }, { baseURL: BASE_URL });
};

export const SignUpForm: React.FC = () => {
  const [phone, setPhone] = useState("");

  return (
    <>
      <Input
        value={phone}
        onChangeText={setPhone}
        style={styles.formControl}
        placeholder="Enter Phone Number"
      />
      <Button title="Submit" />
    </>
  );
};

const styles = StyleSheet.create({
  formControl: { marginBottom: 10 },
});
