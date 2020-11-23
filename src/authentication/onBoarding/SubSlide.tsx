import React from "react";
import { View, StyleSheet} from "react-native";
import Button from '../../components/Button'

import { Text } from '../../components'

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        padding : 44
      },
    subTitle : {
        // fontFamily : "SFProText-Bold",
        // fontSize : 24,
        // lineHeight : 30,
        marginBottom : 12,
        // color : "#0C0D34"     
    },
     description : {
        // fontFamily : "SFProText-Regular",
        // fontSize : 16,
        color : "#0C0D34",
        // lineHeight : 24  ,
        textAlign : "center" ,
        marginBottom : 40

     } 
     
});

interface SubSlideProps {
    description : string,
    subtitle : string,
    last?:boolean,
    onPress : () => void
}

const SubSlide = ({subtitle,description,last,onPress} : SubSlideProps) => {
   
  return (
    <View style = {styles.container} >
            <Text variant="title2" style={styles.subTitle}>{subtitle}</Text>
            <Text variant="body" style={styles.description}>{description}</Text>
            <Button
            label={last?"Let's get Started":"Next"} 
            variant={last?"primary":"default"}
            {...{onPress}}/>
    </View>
  );
};

export default SubSlide;


