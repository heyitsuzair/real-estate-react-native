import {ScrollView, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Breadcrumb from '../components/commons/Breadcrumb';
import ContactCards from '../components/contact/ContactCards';

const ContactScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={tw`flex-1`}>
      <Breadcrumb text="Contact Us" />

      <View style={tw`bg-white flex flex-col items-center justify-center`}>
        <ContactCards />
      </View>
    </ScrollView>
  );
};

export default ContactScreen;
