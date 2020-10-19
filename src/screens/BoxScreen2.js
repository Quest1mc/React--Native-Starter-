import React from 'react';
import { View,Text,StyleSheet } from 'react-native';


const BoxScreen = () => {
    return (
        <View style={styles.viewStyle} >
            <Text  style={styles.textOneStyle}>Child 1</Text>
            <Text  style={styles.textTwoStyle}>Child 2</Text>
            <Text  style={styles.textThreeStyle}>Child 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        // borderWidth:3,
        borderColor: 'black',
        flexDirection:'row',
        height: 50,
        // alignItems: 'center'
        justifyContent: 'space-around'
    },
    textOneStyle:{
        borderWidth:1,
        borderColor: 'black', 
        backgroundColor : 'pink'
        // flex: 4 
    },
    textTwoStyle:{
        borderWidth:1,
        borderColor: 'green', 
        backgroundColor : 'green',
        // flex:4
        // alignSelf: 'flex-end'
        // position: 'absolute',
        top: 30,
        // ...StyleSheet.absoluteFillObject,

        fontSize: 18
    },
    textThreeStyle:{
        borderWidth:1,
        borderColor: 'blue',  
        backgroundColor: 'lavender'
        // flex:2
    }
});

export default BoxScreen;