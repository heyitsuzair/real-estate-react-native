import {StyleSheet, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PreFooter from '../components/commons/PreFooter';
import Footer from '../components/commons/Footer';
import Breadcrumb from '../components/commons/Breadcrumb';
import tw from 'twrnc';
import ProductPicsSlider from '../components/commons/ProductPicsSlider';
import {fetchProperty} from '../functions';
import {ActivityIndicator} from 'react-native-paper';

const PropertyScreen = ({route}: any) => {
  /**
   * State For Loading
   */
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /**
   * State To Store Property Details
   */
  const [property, setProperty] = useState(null);

  /**
   * Property Id From Parameters
   */
  const {id} = route.params;

  /**
   * Fetch Details Of Product
   */
  const getProperty = async (): Promise<void> => {
    const propertyDetails = await fetchProperty(id);
    setProperty(propertyDetails);
    setIsLoading(false);
  };

  useEffect(() => {
    getProperty();
    //eslint-disable-next-line
  }, []);

  return isLoading ? (
    <View style={tw`flex items-center justify-center h-full`}>
      <ActivityIndicator color="red" size={60} />
    </View>
  ) : (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={tw`flex-1 bg-white`}>
      <Breadcrumb text="Property Details" />
      <ProductPicsSlider media={property?.property.listing_media} />

      <PreFooter />
      <Footer />
    </ScrollView>
  );
};

export default PropertyScreen;

const styles = StyleSheet.create({});
