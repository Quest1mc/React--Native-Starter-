import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle}>
      </View>
      <View style={styles.textTwoStyle}>
      </View>
      <View style={styles.textThreeStyle}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    // borderWidth: 3,
    // borderColor: "black",
    flexDirection:'row',
    height: 70,
    // alignItems: 'center'
    justifyContent: 'space-between'
  },
  textOneStyle: {
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "red",
    height : 70,
    width: 70
    // flex: 4
  },
  textTwoStyle: {
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "green",
    height : 70,
    width: 70,
    // bottom: -70
    // top: 70
    // flex:4
    // alignSelf: 'center',
    // position: "absolute",
    marginTop: 70
    
    // bottom: 10,
    // ...StyleSheet.absoluteFillObject,

    // fontSize: 18,
  },
  textThreeStyle: {
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: "blue",
    height : 70,
    width: 50
    // flex:2
  },
});

export default BoxScreen;
