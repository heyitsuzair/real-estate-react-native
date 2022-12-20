import {ScrollView, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Breadcrumb from '../components/commons/Breadcrumb';
import ContactCards from '../components/contact/ContactCards';
import Map from '../components/commons/Map';

const ContactScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={tw`flex-1`}>
      <Breadcrumb text="Contact Us" />

      <View style={tw`bg-white flex flex-col items-center justify-center`}>
        <ContactCards />
        <View style={tw`mb-10`}>
          <Map
            lat={31.5204}
            lng={74.3587}
            title="Office"
            description="Lahore, Pakistan"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactScreen;
