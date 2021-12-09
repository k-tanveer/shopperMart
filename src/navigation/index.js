import React from 'react';
import COLORS from '../constants/colors';
import {Billing, Cart, Detail, Home} from '../screens';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Detail" component={Detail} />
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
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.violet,
        tabBarLabelStyle: {fontSize: 17, fontWeight: 'bold'},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={HomeStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
        name="Cart"
        component={CartStackScreen}
      />
    </Tab.Navigator>
  );
};

export default Root;
