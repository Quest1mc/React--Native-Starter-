import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {

//  user case below uses useState to manage state important to note you will never use a reducer and useSate together
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

//   console.log(red);
//   console.log(blue);
//   console.log(green);

  const setColor = (color, change) => {
    // color is === red green or blue
    // change === +15 or -15
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 
        ? null 
        : setRed(red + change);
        return;
      // below is not using a turnary statement
      //   if (red + change > 255 || red + change < 0) {
      //     return;
      //   } else {
      //     setRed(red + change);
      //   }
      //   return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
        default:
            return;

    }
  };
  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor('green' , COLOR_INCREMENT)}
        onDecrease={() => setColor('green' ,-1 * COLOR_INCREMENT)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor('blue',COLOR_INCREMENT)}
        onDecrease={() => setColor('blue' , -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default SquareScreen;

/* this is an example of a check using an if statement DO NOT USE !!!!
<ColorCounter
onIncrease={() => {
    if (red + COLOR_INCREMENT > 255){
        return;
    }
    setRed(red + COLOR_INCREMENT)
}}
onDecrease={() => {
    if (red - COLOR_INCREMENT < 0){
        return;
    }
    setRed(red - COLOR_INCREMENT)
}}
color="Red"
/>  */
