import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useFocusEffect} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  AktivityAdmin,
  AktivitySuperAdmin,
  Favorite,
  ForgotPassword,
  Home,
  HomeAdmin,
  HomeSuperAdmin,
  Jelajah,
  Kost,
  LibDemo,
  OnBoarding,
  Profile,
  ProfileAdmin,
  ProfileSuperAdmin,
  ResetPassword,
  SignIn,
  SignUp,
  Splash,
  SuccesResetPassword,
  SuccesSignUp,
} from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// Button Top Admin/Pemilik
function BottomTabAdmin() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000000"
      inactiveColor="#808080"
      barStyle={{backgroundColor: '#ffffff'}}>
      <Tab.Screen
        name="Home"
        component={HomeAdmin}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="home-variant-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={AktivityAdmin}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({color}) => (
            <Icon
              name="clipboard-text-multiple-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileAdmin}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Button Top Super Admin
function BottomTabSuperAdmin() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000000"
      inactiveColor="#808080"
      barStyle={{backgroundColor: '#ffffff'}}>
      <Tab.Screen
        name="Home"
        component={HomeSuperAdmin}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="home-variant-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={AktivitySuperAdmin}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({color}) => (
            <Icon
              name="clipboard-text-multiple-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileSuperAdmin}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// bottomTop User
function Main() {
  const [backgroundColor, setBackgroundColor] = useState('#000000');

  useFocusEffect(() => {
    setBackgroundColor('#ffffff');
    return () => {
      setBackgroundColor('#000000');
    };
  });

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="rgb(0,93,255)"
      inactiveColor="#9E9E9E"
      barStyle={{backgroundColor: backgroundColor}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Jelajah"
        component={Jelajah}
        options={{
          tabBarLabel: 'Jelajah',
          tabBarIcon: ({color}) => (
            <Icon name="compass" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Kos Saya"
        component={Kost}
        options={{
          tabBarLabel: 'Kos Saya ',
          tabBarIcon: ({color}) => (
            <Icon name="eject" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorit"
        component={Favorite}
        options={{
          tabBarLabel: 'Favorit',
          tabBarIcon: ({color}) => (
            <Icon name="bookmark" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigator() {
  const [initialRouteName, setInitialRouteName] = useState('LibDemo');

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: 'transparent',
        statusBarTranslucent: true,
      }}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="LibDemo" component={LibDemo} />
      <Stack.Screen name="SplashScreen" component={Splash} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="SuccesScreen" component={SuccesResetPassword} />
      <Stack.Screen name="SuccesScreenSignUp" component={SuccesSignUp} />
      <Stack.Screen name="BottomTabAdmin" component={BottomTabAdmin} />
      <Stack.Screen
        name="BottomTabSuperAdmin"
        component={BottomTabSuperAdmin}
      />
      <Stack.Screen name="MainNavigator" component={Main} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Jelajah" component={Jelajah} />
      <Stack.Screen name="ProfileKost" component={Kost} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
