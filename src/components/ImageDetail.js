import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';

const ImageDetail = ({title,imageSource,imageScore}) => {
   
    return <View>
        <Image source={imageSource} />
        <Text style={styles.text}>Name:{title}</Text>
        <Text style={styles.text}>Score:{imageScore}</Text>
        </View>
}
  
const styles = StyleSheet.create({
    textStyle: {
        fontSize:45
    },
    subHeaderStyle: {
        fontSize:20
    }
        
});


export default ImageDetail;