import React from "react";
import { View, StyleSheet,Dimensions, Image} from "react-native";

import { Text } from '../../components'

const {width,height} = Dimensions.get("window")

export const SLIDER_HEIGHT = 0.61*height

const styles = StyleSheet.create({
    container: {
        width, 
      },
      underlay :{
        ...StyleSheet.absoluteFillObject,
        justifyContent : "flex-end",
        
    } ,
    image : {
        ...StyleSheet.absoluteFillObject,
        height: undefined,
        width : undefined,
        alignItems : "center",
        justifyContent: 'center',
        resizeMode: 'contain',  
        borderBottomRightRadius : 75
    },  
    titleContainer : {
        height : 100,
        justifyContent : "center",
        
    },
     
});

interface SlideProps {
    label : string,
    right?: boolean,
    image : number,
}

const Slide = ({label,right,image} : SlideProps) => {
    const transform = [
            { translateY : (SLIDER_HEIGHT-100)/2 },
            { translateX : right ? width /2 -50 : -width /2 + 50},
            { rotate : right ? "-90deg" : "90deg"}
    ];
  return (
    <View style = {styles.container} >
        <View style={styles.underlay}>      
            <Image source={image} style={styles.image}></Image>
        </View>
        <View style = {[styles.titleContainer,{ transform }]}>
            <Text variant="hero">{label}</Text>
        </View>
    </View>
  );
};

export default Slide;


