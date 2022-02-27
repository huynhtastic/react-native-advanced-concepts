import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

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
