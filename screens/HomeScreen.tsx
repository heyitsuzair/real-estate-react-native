import {ScrollView} from 'react-native';
import React from 'react';
import PreFooter from '../components/commons/PreFooter';
import Footer from '../components/commons/Footer';
import Hero from '../components/home/Hero';
import tw from 'twrnc';

const HomeScreen = () => {
  return (
    <ScrollView style={tw`flex-1`}>
      <Hero />
      <PreFooter />
      <Footer />
    </ScrollView>
  );
};

export default HomeScreen;
