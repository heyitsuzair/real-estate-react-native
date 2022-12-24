import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen';
import ContactScreen from '../screens/ContactScreen';
import ShopScreen from '../screens/ShopScreen';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarHideOnKeyboard: true,
        tabBarStyle: tw`border-t`,
      }}>
      <Tab.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={23} />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="shop"
        options={{
          tabBarLabel: 'Shop',
          headerShown: false,
          headerTitle: 'Shop',
          headerStyle: tw`shadow-lg`,
          headerTitleStyle: styles.poppinsSemiBold,
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
          headerShown: false,
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
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={23} />
          ),
        }}
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({
  poppinsSemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
});
