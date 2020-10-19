import React,{ useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name,setName] = useState('');
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput 
      autoCapitalize="none"
      autoCorrect={false}
      style ={styles.input}
      value = {name}
      onChangeText={(newValue)=>setName(newValue)}
       />
      
      <Text>My Name is {name}</Text>
      {name.length<5? <Text>A password must have more than 5 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor: 'black',
        borderWidth: 1
    },
    textStyle: {
    fontSize: 45,
    },
    subHeaderStyle: {
    fontSize: 20,
  }
});

export default TextScreen;
