import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        imageScore= {9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        imageScore= {8}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore= {7}
      />
      <ImageDetail
        title="Town"
        imageSource={require("../../assets/town.jpg")}
        imageScore= {10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 35,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ImageScreen;
