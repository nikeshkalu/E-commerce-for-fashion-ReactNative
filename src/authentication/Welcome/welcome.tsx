import React from "react";
import { View, StyleSheet, Image } from "react-native";
// import Animated, { interpolate, Extrapolate } from "react-native-reanimated";
import { Box,Text } from "../../components/theme";
import { Button } from "../../components";
import { StackNavigationProps, Routes } from "../../components/Navigation";


// interface DotProps {
//     index : number,
//     currentIndex : Animated.Node<number>
// }

const Welcome = ({navigation} : StackNavigationProps<Routes,"Welcome">) => {
   

  return (
   <Box flex={1} backgroundColor="white">
     <Box flex={1} borderBottomRightRadius="xl" backgroundColor="grey">
       <Image source={require('../onBoarding/assets/5.png')} style={{ 
         ...StyleSheet.absoluteFillObject,
        height: undefined,
        width : undefined,
        alignItems : "center",
        justifyContent: "flex-end",
        resizeMode: 'contain',}}/>
     </Box>

     <Box flex={1} borderBottomLeftRadius="xl">
       <Box backgroundColor="grey" position="absolute" top={0} left={0} right={0} bottom={0}/>
       <Box backgroundColor="white" borderTopLeftRadius="xl" flex={1} alignItems="center" padding="xl" justifyContent="space-evenly">

          <Text variant="title2">Let's get Started</Text>
          <Text variant="body" textAlign="center">Login to account  or signUp for amazing shoping experience</Text>
          
          <Button variant="primary" label="Have an Account?Login" onPress={()=>{
            navigation.navigate('Login')
          }}></Button>
          <Button label="Join us,Its free"  onPress={()=>{}}></Button>
          <Button variant="transparent" label="Forget Password?" onPress={()=>{}}></Button>

       </Box>
     </Box>

   </Box>
  );
};

export default Welcome;


