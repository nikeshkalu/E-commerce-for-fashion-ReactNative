import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import {useValue,onScrollEvent,useSpring} from "react-native-redash"
import { useValue,interpolateColor,onScrollEvent,useScrollHandler } from "react-native-redash/lib/module/v1"
import Animated, { multiply, divide } from 'react-native-reanimated';
import Slide,{SLIDER_HEIGHT} from './Slide'
import SubSlide from './SubSlide'
import Dot from './Dot'

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
    backgroundColor: "white",
    borderTopLeftRadius:75
  },
  pagination:{
    ...StyleSheet.absoluteFillObject,
    height : 75,
    justifyContent : "center",
    alignItems : "center",
    flexDirection : "row"
  }
});

const slides = [
  { title:"Relaxed",subtitle:"Find your outfit",description:"The best outfit in the town.",color:"#BFEAF5" },
  { title:"Playful",subtitle:"Hear it is wear it first",description:"Dummpy value",color:"#BEECC4" },
  { title:"Excentric",subtitle:"Your style your way",description:"Random content.",color:"#FFE4D9" },
  { title:"Funky",subtitle:"Look good, Feel Good",description:"Best clothes to look good",color:"#FFDDDD" },
]

const onBoarding = () => {
  const scroll = useRef<Animated.ScrollView>(null)
  // const x = useValue(0);
  const {scrollHandler,x} = useScrollHandler()
  // const onScroll = onScrollEvent({ x })

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_,i)=>i * width),
    outputRange: slides.map((slide)=>slide.color),
  });

  
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider , { backgroundColor} ] }>
        <Animated.ScrollView 
          horizontal
          ref = {scroll} 
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          // scrollEventThrottle={1}
          {...scrollHandler}
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

        <View style={styles.footerContent}>
        <View style={styles.pagination}>
                  {slides.map((_,index)=>(
                    <Dot 
                      key={index}
                      currentIndex = {divide(x,width)}
                      {...{index}}/>
                  ))}
              </View>

          <Animated.View style={ 
            {
              width : width * slides.length,
              flex:1,
              transform : [{translateX:multiply(x,-1)}],
              flexDirection : "row"
              }
            }>

             
            {slides.map(({subtitle,description},index)=>(
              <SubSlide 
              key={index}
              onPress = {()=>{
                if(scroll.current){
                  scroll.current.getNode().scrollTo({x:width*(index+1),animated : true})
                }
              }}
              last={index === slides.length-1}
              {...{subtitle,description}}/>
            ))}

          </Animated.View>
          </View>
        </View>
    </View>
  );
};

export default onBoarding;
