import React, { ReactNode } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, StatusBar } from 'react-native'
import theme, { Box } from './theme'

const {width} = Dimensions.get('window')
const height = width * (750/1125)
export const assets = [require('../components/assets/1.jpeg')]

const styles = StyleSheet.create({})

interface ContainerProps {
    children : ReactNode,
    footer : ReactNode
}

const Container = ({children,footer} : ContainerProps) => {
    return (
        <Box flex={1} backgroundColor="secondary">
            <StatusBar barStyle="light-content"/>
            <Box backgroundColor="white">
            <Box borderBottomLeftRadius="xl" overflow="hidden" height={height*0.6}>
                <Image source={assets[0]} style={{
                    width,
                    height,
                    borderBottomLeftRadius: theme.borderRadii.xl
                    }}></Image>
            </Box>
            </Box>

            <Box flex={1} overflow="hidden" >

                    <Image source={assets[0]} style={{
                    ...StyleSheet.absoluteFillObject,    
                    width,
                    height,
                    }}></Image>

                    <Box borderTopRightRadius="xl" borderBottomRightRadius="xl" borderBottomLeftRadius="xl" backgroundColor="white" flex={1}>
                        {children}
                    </Box>
            </Box>
            
            <Box height={170} backgroundColor="secondary">
                {footer}
            </Box>
        </Box>
    )
}

export default Container

