// import React,{useState} from "react";
// import { View, Text, StyleSheet, Button } from "react-native";

// const CounterScreen = () => {
//  const [counter,setCounter] = useState(0);

//   return (
//     <View>
//       <Button title="Increase" 
//       onPress={() => 
//          //DO NOT DO THIS : i.e. absolutely shitty code STEFAN!counter++;
//         setCounter(counter + 1)
//         // notice above the setter fucntion! you will always use a setter function to change STATE!
//         } />
//       <Button title="Decrease" onPress={() => setCounter(counter - 1)}/>
//       <Text>Current Count: {counter}</Text>
//     </View>
//   );
// };

// const style = StyleSheet.create({});

// export default CounterScreen;


import React,{useReducer} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const INCREMENT = 1;

const reducer = (state, action) =>{
  //state = { counter : number }
  // action = { type: 'increment' || 'decrement' ,payload : ICREMENT}
switch(action.type){
  case "increment":
    return {...state, counter : state.counter + action.payload};
  case "decrement":
    return {...state, counter : state.counter - action.payload};
    default:
      return state;
}
};


const CounterScreen = () => {
//  const [counter,setCounter] = useState(0);
 const [state,dispatch]= useReducer(reducer,{counter:0});
 const { counter } = state;

  return (
    <View>
      <Button title="Increase" 
      onPress={() => 
        dispatch({type : 'increment' , payload: INCREMENT}) } />
      <Button title="Decrease" onPress={() => dispatch({type:'decrement' , payload: INCREMENT })}/>
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreen;




