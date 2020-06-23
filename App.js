import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";

import Header from "./components/Header";
import GroceryItems from "./components/GroceryItems";
import Additem from "./components/Additem";

export default function App() {
  const [grocery, setGrocery] = useState([
    { text: "bread", key: "1" },
    { text: "coffee", key: "2" },
  ]);

  /////////////////// to delete/remove item ///////////////////////////////////
  const pressHandler = (key) => {
    setGrocery((prevGrocery) => {
      return prevGrocery.filter((item) => item.key != key);
    });
  };

  /////////////////// to add item ///////////////////////////////////
  const handleSubmit = (text) => {
    setGrocery((prevGrocery) => {
      return [{ text: text, key: Math.random().toString() }, ...prevGrocery];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <Additem handleSubmit={handleSubmit} />

          <FlatList
            style={styles.box}
            data={grocery}
            renderItem={({ item }) => (
              <GroceryItems item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c2ffc2",
  },
  content: {
    flex: 3,
  },
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "70%",
  },
});
