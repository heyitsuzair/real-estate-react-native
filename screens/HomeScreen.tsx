import React from 'react';
import PreFooter from '../components/commons/PreFooter';
import Footer from '../components/commons/Footer';
import Hero from '../components/home/Hero';
import tw from 'twrnc';
import AboutSection from '../components/home/AboutSection';
import CountersSection from '../components/home/CountersSection';
import {IOScrollView} from 'react-native-intersection-observer';
import OurServices from '../components/home/OurServices';
import FeaturedListings from '../components/home/FeaturedListings';
import OurAmenities from '../components/home/OurAmenities';
import OurTestimonial from '../components/home/OurTestimonial';

const HomeScreen = () => {
  return (
    <IOScrollView showsVerticalScrollIndicator={false} style={tw`flex-1`}>
      <Hero />
      <AboutSection />
      <CountersSection />
      <OurServices />
      <FeaturedListings />
      <OurAmenities />
      <OurTestimonial />
      <PreFooter />
      <Footer />
    </IOScrollView>
  );
};

export default HomeScreen;
