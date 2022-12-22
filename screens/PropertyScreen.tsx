import {Linking, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PreFooter from '../components/commons/PreFooter';
import Footer from '../components/commons/Footer';
import Breadcrumb from '../components/commons/Breadcrumb';
import tw from 'twrnc';
import ProductPicsSlider from '../components/commons/ProductPicsSlider';
import {fetchProperty} from '../functions';
import {ActivityIndicator} from 'react-native-paper';
import OwnerProfile from '../components/commons/OwnerProfile';
import FloatingBtn from '../components/commons/FloatingBtn';
import {capitalizeFirstLetter} from '../utils';
import Date from '../components/commons/Date';
import BadgeFilled from '../components/commons/BadgeFilled';
import CommentsCount from '../components/commons/CommentsCount';

const PropertyScreen = ({route}: any) => {
  /**
   * State For Loading
   */
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /**
   * State To Store Property Details
   */
  const [property, setProperty] = useState<any>(null);

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
    <>
      <FloatingBtn
        icon="phone"
        color="slate"
        onPress={() =>
          Linking.openURL(`tel:${property?.property.seller_id.phone_no}`)
        }
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={tw`flex-1 bg-white`}>
        <Breadcrumb text="Property Details" />
        <ProductPicsSlider media={property?.property.listing_media} />
        <View style={tw`py-8 px-14 bg-white`}>
          <OwnerProfile owner={property?.property.seller_id} />
          <View style={tw`flex items-center my-4`}>
            <BadgeFilled
              text={`${
                property.property.status !== 'sold' && 'For'
              } ${capitalizeFirstLetter(property.property.status)}`}
            />
          </View>
          <View style={tw`flex items-center`}>
            <Date date={property.property.createdAt} />
          </View>
          <View style={tw`flex items-center my-4`}>
            <CommentsCount
              comments={property.property.property_total_reviews}
            />
          </View>
        </View>
        <PreFooter />
        <Footer />
      </ScrollView>
    </>
  );
};

export default PropertyScreen;
