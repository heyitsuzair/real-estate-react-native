import {ScrollView, View} from 'react-native';
import React from 'react';
import PreFooter from '../components/commons/PreFooter';
import Footer from '../components/commons/Footer';
import Hero from '../components/home/Hero';
import tw from 'twrnc';
import AboutSection from '../components/home/AboutSection';

const HomeScreen = () => {
  return (
    <ScrollView style={tw`flex-1`}>
      <Hero />
      <AboutSection />
      <View style={tw`mt-100`}>
        <PreFooter />
        <Footer />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
