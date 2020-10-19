import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 45 },
    { name: "Friend #3", age: 32 },
    { name: "Friend #4", age: 27 },
    { name: "Friend #5", age: 53 },
    { name: "Friend #6", age: 30 },
    { name: "Friend #7", age: 46 },
    { name: "Friend #8", age: 35 },
    { name: "Friend #9", age: 23 },
  ];
  return (
    <FlatList
      // horizontal
      showsVerticalScrollIndicator={false}
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        //{item}= element === { item: {name: 'Friend #1'}, index: 0}
        return (
          <Text style={styles.textStyle}>
            Name: {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
