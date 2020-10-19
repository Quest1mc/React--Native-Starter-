import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Hi there';
    const name = <Text style= {styles.subHeaderStyle}>My name is Stefan</Text>
    // the only limitation for the above is objects you cannot show an object in a jsx variable
    return <View>
        <Text style= {styles.textStyle}>Getting Started with React Native</Text>
        <Text>{name}</Text>
        </View>;
};


const styles = StyleSheet.create({
    textStyle: {
        fontSize:45
    },
    subHeaderStyle: {
        fontSize:20
    }
        
});
export default ComponentsScreen;