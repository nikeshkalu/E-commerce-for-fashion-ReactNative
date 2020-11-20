import React from "react";
import { View, StyleSheet, Text ,Dimensions, Image} from "react-native";

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
        height:undefined,
        width : undefined,
        borderBottomRightRadius : 75
    },  
    titleContainer : {
        height : 100,
        justifyContent : "center",
        
    },
     title : {
         fontSize : 80,
         lineHeight : 80,
         fontFamily : "SFProText-Bold",
         color : "white",
         textAlign : "center"
     },
     
     
});

interface SlideProps {
    label : string,
    right?: boolean,
    image : number
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
            <Text style={styles.title}>{label}</Text>
        </View>
    </View>
  );
};

export default Slide;


