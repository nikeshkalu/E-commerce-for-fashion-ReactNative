import React from 'react'
import { View} from 'react-native'

import { Button, Text } from '../../components'

export default function Footer() {
    return (
        <View style={{
            alignContent : "center",
            alignItems : "center",
            justifyContent : "center",
        }}>
            
            <Text color="white" style={{
                paddingTop : 50,
                fontSize : 18,
                paddingBottom : 20
            }}>
                Don't have an account?
                
            </Text>
            <Button variant="primary" label="Sign Up" onPress={()=>{alert('signUp')}}/>
    
            
        </View>
    )
}
