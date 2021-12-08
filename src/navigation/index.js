import React from 'react';
import {Billing, Cart, Detail, Home} from '../screens';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Detail} />
    </HomeStack.Navigator>
  );
};

const CartStackScreen = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="Billing" component={Billing} />
    </CartStack.Navigator>
  );
};

const Root = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Cart" component={CartStackScreen} />
    </Tab.Navigator>
  );
};

export default Root;
