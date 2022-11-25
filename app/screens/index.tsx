import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Auth from './auth';
import Booking from './booking';
import Home from './home';
import Profile from './profile';
import {MainBottomTabs} from 'app/constants/routes';
import TabIcons from 'app/assets/icons/TabIcons';

export type RootStackParamList = {
  auth: undefined;
  bottomNavigation: BottomParamList;
};

export type BottomParamList = {
  Home: undefined;
  Booking: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Bottom = createBottomTabNavigator<BottomParamList>();

const BottomNavigator = () => (
  <Bottom.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarIcon: ({color}) => {
        return <TabIcons name={route.name} color={color} />;
      },
    })}>
    <Bottom.Screen name={MainBottomTabs.Home} component={Home} />
    <Bottom.Screen name={MainBottomTabs.Booking} component={Booking} />
    <Bottom.Screen name={MainBottomTabs.Profile} component={Profile} />
  </Bottom.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="auth" component={Auth} />
      <Stack.Screen name="bottomNavigation" component={BottomNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
