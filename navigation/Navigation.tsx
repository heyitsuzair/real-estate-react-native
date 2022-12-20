import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';
import ShopScreen from '../screens/ShopScreen';
import ContactScreen from '../screens/ContactScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        activeColor={'red'}
        barStyle={tw`bg-white border-t-2 border-red-500`}>
        <Tab.Screen
          name="home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={23} />
            ),
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="shop"
          options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({color}) => (
              <Icon name="shopping-cart" color={color} size={23} />
            ),
          }}
          component={ShopScreen}
        />
        <Tab.Screen
          name="contact"
          options={{
            tabBarLabel: 'Contact',
            tabBarIcon: ({color}) => (
              <Icon name="phone" color={color} size={23} />
            ),
          }}
          component={ContactScreen}
        />
        <Tab.Screen
          name="search"
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color}) => (
              <Icon name="search" color={color} size={23} />
            ),
          }}
          component={SearchScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
