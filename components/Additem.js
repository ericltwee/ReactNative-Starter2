import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Additem({ handleSubmit }) {
  const [text, setText] = useState("");

  const changeHandler = (txt) => {
    setText(txt);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="tambah barang sini.."
        placeholderTextColor="gray"
        onChangeText={changeHandler}
      />
      <View style={styles.button}>
        <Button
          onPress={() => handleSubmit(text)}
          color="green"
          title="Tambah"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "70%",
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    textAlign: "center",
  },
  button: {
    marginTop: 5,
    borderRadius: 20,
  },
});
