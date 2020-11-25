import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {ThemeProvider} from '@shopify/restyle';


import { onBoarding,Welcome } from "./src/authentication";
import { LoadAssets,theme } from "./src/components";
import { Routes } from "./src/components/Navigation";
import { Login } from "./src/authentication/Login";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthenticationStack = createStackNavigator<Routes>();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="onBoarding" component={onBoarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider {...{theme}}>
      <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
    </ThemeProvider>
    
  );
}
