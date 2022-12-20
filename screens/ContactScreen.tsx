import {View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import tw from 'twrnc';
import Breadcrumb from '../components/commons/Breadcrumb';

const ContactScreen = () => {
  return (
    <View style={tw`flex-1`}>
      <Breadcrumb text="Contact Us" />

      <View style={tw`bg-white`}>
        <Text style={tw`text-black`}>Outside</Text>
        <Text style={tw`text-black`}>Outside</Text>
        <Text style={tw`text-black`}>Outside</Text>
        <Text style={tw`text-black`}>Outside</Text>
        <Text style={tw`text-black`}>Outside</Text>
        <Text style={tw`text-black`}>Outside</Text>
        <Text style={tw`text-black`}>Outside</Text>
        <Text style={tw`text-black`}>Outside</Text>
        <Text style={tw`text-black`}>Outside</Text>
      </View>
    </View>
  );
};

export default ContactScreen;
