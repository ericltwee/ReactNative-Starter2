import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function GroceryItems({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 15,
    marginTop: 15,
    borderColor: "#000",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
