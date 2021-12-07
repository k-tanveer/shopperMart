import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={() => null} />
      <HomeStack.Screen name="Details" component={() => null} />
    </HomeStack.Navigator>
  );
};

const CartStackScreen = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={() => null} />
      <CartStack.Screen name="Billing" component={() => null} />
    </CartStack.Navigator>
  );
};

const Root = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Cart" component={CartStackScreen} />
    </Tab.Navigator>
  );
};

export default Root;
