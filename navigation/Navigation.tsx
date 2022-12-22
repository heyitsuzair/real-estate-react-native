import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import ShopScreen from '../screens/ShopScreen';
import ContactScreen from '../screens/ContactScreen';
import SearchScreen from '../screens/SearchScreen';
import {createStackNavigator} from '@react-navigation/stack';
import tw from 'twrnc';
import {StyleSheet} from 'react-native';
import PropertyScreen from '../screens/PropertyScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
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
          headerShown: true,
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

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="tabs"
          options={{headerShown: false}}
          component={Tabs}
        />
        <Stack.Screen
          name="property"
          options={{
            headerTitle: 'Back',
            headerStyle: tw`shadow-lg`,
            headerTitleStyle: styles.poppinsSemiBold,
          }}
          component={PropertyScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  poppinsSemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
});
