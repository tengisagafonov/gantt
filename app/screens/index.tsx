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
import {Colors, fontWeight} from 'config/Theme';
import OffersList from 'app/screens/list';
import ShopInfo from 'app/screens/shopInfo';
import BookingInfo from 'app/screens/bookingInfo';
import {Status} from 'app/types';

export type RootStackParamList = {
  auth: undefined;
  bottomNavigation: BottomParamList;
};

export type HomeStackList = {
  Home: undefined;
  List: {title: string};
  Shop: {title: string};
};

export type BookingStackList = {
  BookingRoot: undefined;
  BookingInfo: {title: string; status: Status};
};

export type BottomParamList = {
  Home: HomeStackList;
  Booking: BookingStackList;
  Profile: undefined;
};

const HomeStack = createStackNavigator();

const Stack = createStackNavigator<RootStackParamList>();
const BookingStack = createStackNavigator<BookingStackList>();
const Bottom = createBottomTabNavigator<BottomParamList>();

const BookingNavigator = () => (
  <BookingStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <BookingStack.Screen name={'BookingRoot'} component={Booking} />
    <BookingStack.Screen name={'BookingInfo'} component={BookingInfo} />
  </BookingStack.Navigator>
);

const HomeNavigator = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <HomeStack.Screen name={'HomeRoot'} component={Home} />
    <HomeStack.Screen name={'List'} component={OffersList} />
    <HomeStack.Screen name={'Shop'} component={ShopInfo} />
  </HomeStack.Navigator>
);

const BottomNavigator = () => (
  <Bottom.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarItemStyle: {borderTopWidth: 2, borderColor: Colors.buttonInactive},
      tabBarLabelStyle: {fontWeight: fontWeight.bold},
      tabBarIcon: ({color}) => {
        return <TabIcons name={route.name} color={color} />;
      },
    })}>
    <Bottom.Screen name={MainBottomTabs.Home} component={HomeNavigator} />
    <Bottom.Screen name={MainBottomTabs.Booking} component={BookingNavigator} />
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
