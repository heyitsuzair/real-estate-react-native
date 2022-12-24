import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import tw from 'twrnc';
import {StyleSheet} from 'react-native';
import PropertyScreen from '../screens/PropertyScreen';
import FlashMessage from 'react-native-flash-message';
import FindNowScreen from '../screens/FindNowScreen';
import TabNav from './TabNav';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="tabs"
          options={{headerShown: false}}
          component={TabNav}
        />
        <Stack.Screen
          name="findNow"
          options={{headerShown: false}}
          component={FindNowScreen}
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
      <FlashMessage titleStyle={styles.poppinsSemiBold} position="top" />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  poppinsSemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
});
