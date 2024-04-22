import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  ForgotPassword,
  OnBoarding,
  ResetPassword,
  SignIn,
  SignUp,
  Splash,
  SuccesResetPassword,
} from '../screens';
import SuccesSignUp from '../screens/SignUp/SuccesSignUp';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: 'transparent',
        statusBarTranslucent: true,
      }}>
      {/* <Stack.Screen name="testing" component={LibsTest} /> */}
      <Stack.Screen name="SplashScreen" component={Splash} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="SuccesScreen" component={SuccesResetPassword} />
      <Stack.Screen name="SuccesScreenSignUp" component={SuccesSignUp} />
    </Stack.Navigator>
  );
}
