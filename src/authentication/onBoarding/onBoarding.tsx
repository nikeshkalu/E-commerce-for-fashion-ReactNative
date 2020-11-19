import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import {useValue,onScrollEvent,useSpring} from "react-native-redash"
import { useValue,interpolateColor,onScrollEvent } from "react-native-redash/lib/module/v1"
import Animated, { multiply } from 'react-native-reanimated';
import Slide,{SLIDER_HEIGHT} from './Slide'
import SubSlide from './SubSlide'

const { width} = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "white",
  },
  slider: {
    height: SLIDER_HEIGHT,
    borderBottomRightRadius : 75
  },
  footer: {
    flex: 1,
  },
  footerContent : {
    flex:1,
    flexDirection:"row",
    backgroundColor: "white",
    borderTopLeftRadius:75
  }
});

const slides = [
  { title:"Relaxed",subtitle:"Find your outfit",description:"The best outfit in the town.",color:"#BFEAF5" },
  { title:"Playful",subtitle:"Hear it is wear it first",description:"Dummpy value",color:"#BEECC4" },
  { title:"Excentric",subtitle:"Your style your way",description:"Random content.",color:"#FFE4D9" },
  { title:"Funky",subtitle:"Look good, Feel Good",description:"Best clothes to look good",color:"#FFDDDD" },
]

const onBoarding = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x })

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_,i)=>i * width),
    outputRange: slides.map((slide)=>slide.color),
  });

  
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider , { backgroundColor} ] }>
        <Animated.ScrollView 
          horizontal 
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
          >
          {
            slides.map((slide,index)=>(
              <Slide key={index} right={!!(index%2)} label={slide.title}></Slide>
            ))
          }
          
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{...StyleSheet.absoluteFillObject,backgroundColor}}/>
          <Animated.View style={[
            styles.footerContent,
            {
              width : width * slides.length,
              flex:1,
              transform : [{translateX:multiply(x,-1)}]
              }]}>
            {slides.map(({subtitle,description},index)=>(
              <SubSlide key={index} last={index === slides.length-1} {...{subtitle,description}}/>
            ))}
          </Animated.View>
        </View>
    </View>
  );
};

export default onBoarding;
