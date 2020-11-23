import React from "react";
import { View, StyleSheet, Text ,Dimensions} from "react-native";
import {RectButton} from 'react-native-gesture-handler'
import theme from "./theme";

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height : 50,
        width : 245,
        justifyContent : "center",
        alignItems:"center"

      },
   label:{
      fontSize : 15,
      fontFamily : "SFProText-Regular",
      textAlign : "center"
   }
     
});

interface ButtonProps {
    label : string,
    variant : "default" | "primary" | "transparent",
    onPress : () => void
    
}

const Button = ({label,variant,onPress} : ButtonProps) => {

  const backgroundColor = variant === "primary" ? theme.colors.primary : variant === "transparent"?"transparent":"rgba(12,13,52,0.05)"
  const color = variant === "primary" ? theme.colors.white : theme.colors.button
   
  return (
    <RectButton style={[styles.container,{ backgroundColor }]} {...{onPress}}>
         <Text style={[styles.label,{ color }]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = { variant : "default"}

export default Button;


