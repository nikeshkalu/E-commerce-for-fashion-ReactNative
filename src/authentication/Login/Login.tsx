import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigationProps, Routes } from "../../components/Navigation";
import Container  from '../../components/Container';
import Footer from './Footer';

export default function Login() {
    return (
        <Container footer={<Footer/>}>
            <View>
                <Text>Content</Text>
            </View>
        </Container>
    )
}
