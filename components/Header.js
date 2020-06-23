import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Grocery List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,

    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    color: "#000",
    fontSize: 50,
    fontWeight: "bold",
  },
});
