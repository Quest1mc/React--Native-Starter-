import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
 
  return <View>
    <Text style={styles.text}>My Online Closet</Text> 
  <Button  
  onPress={() => navigation.navigate('Components')}
  title = "Go to Components Demo"/>
   <Button  
  onPress={() => navigation.navigate('List')}
  title = "Go to List Demo"/>
  <Button  
  onPress={() => navigation.navigate('Image')}
  title = "Go to Images Demo"/>
  <Button  
  onPress={() => navigation.navigate('Counter')}
  title = "Go to Counter Demo"/>
  <Button  
  onPress={() => navigation.navigate('Color')}
  title = "Go to Color Demo"/>
    <Button  
  onPress={() => navigation.navigate('Square')}
  title = "Go to Square Demo"/>
   <Button  
  onPress={() => navigation.navigate('Text')}
  title = "Go to Text Demo"/>
   <Button  
  onPress={() => navigation.navigate('Box')}
  title = "Go to BoxScreen Demo"/>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 10
  }
});

export default HomeScreen;
