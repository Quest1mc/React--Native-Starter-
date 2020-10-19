import React, { useReducer } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

// action = hotToChangeStateObject

const reducer =(state, action)=>{
// state=== {red: number, green: number, blue: number};

// Community convention colorToChange would normally be 'type', and amount would be 'payload'
//Important! a reducer SHOULD ALWAYS RETURN STATE.
// action ==={colorToChange or type: 'red'||'green'||'blue', amount or payload: 15 || -15 };
// if you use type: 'change_red' or 'change_green' or 'change_blue'



switch(action.type){
    case "change_red":
        return state.red + action.payload > 255 || state.red + action.payload < 0 ? state
        :{...state, red: state.red + action.payload}
        // not using ternary statement
        // if(state.red + action.amount > 255 || state.red + action.amount < 0){
        //     return state;
        // }
        // return {...state, red: state.red + action.amount};
    case"change_green":
    return state.green + action.payload > 255 || state.green + action.payload < 0 ? state
        :{...state, green: state.green + action.payload}
    case "change_blue":
        return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state
        :{...state, blue: state.blue + action.payload}
    default:
        return state;
}
};

const SquareScreen = () => {

const [state,dispatch] = useReducer(reducer,{red:0, green:0, blue:0});
const { red, green, blue } = state;
// console.log(state);{red:0, green:0, blue:0}
//dispatch === run My Reducer i.e. dispatch is only just convention but this is what it means


//   console.log(red);
//   console.log(blue);
//   console.log(green);


  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
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
