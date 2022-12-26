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
import {capitalizeFirstLetter, numberToString} from '../utils';
import Date from '../components/commons/Date';
import BadgeFilled from '../components/commons/BadgeFilled';
import CommentsCount from '../components/commons/CommentsCount';
import TextMedium from '../components/commons/TextMedium';
import Location from '../components/commons/Location';
import HeadingBordered from '../components/commons/HeadingBordered';
import TextSm from '../components/commons/TextSm';
import PropertyChart from '../components/commons/PropertyChart';
import FactsAndFeatures from '../components/property/FactsAndFeatures';
import OurGallery from '../components/property/OurGallery';
import Amenities from '../components/property/Amenities';
import Map from '../components/commons/Map';
import Tabs from '../components/commons/Tabs';
import TabContent from '../components/commons/TabContent';
import PropertyStarRatings from '../components/commons/PropertyStarRatings';
import AddReviewForm from '../components/commons/AddReviewForm';
import Comments from '../components/property/Comments';

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
   * Tabs
   */
  const [tabs, setTabs] = useState<string[]>([]);
  /**
   * State For Active Tab
   */
  const [activeTab, setActiveTab] = useState<number>(0);
  /**
   * State For Comment Addition
   */
  const [isCommentAdded, setIsCommentAdded] = useState<boolean>(false);

  /**
   * Property Id From Parameters
   */
  const {id} = route.params;

  type floors = {
    floor_description: string;
    floor_media: string;
    floor_heading: string;
  };

  /**
   * Functions To Set Tabs
   */
  const orderTabs = (floors: floors[]): void => {
    let data: string[] = [];
    /**
     * Pushing Each Floor To "data" array variable
     */
    floors.forEach((floor: floors, index: number) => {
      data.push(numberToString(index + 1) + ' Floor');
    });

    setTabs(data);
  };

  /**
   * Fetch Details Of Product
   */
  const getProperty = async (): Promise<void> => {
    const propertyDetails = await fetchProperty(id);
    setProperty(propertyDetails);

    /**
     * Settings Tabs
     */
    orderTabs(propertyDetails.property.property_floors);
    setIsLoading(false);
  };

  useEffect(() => {
    getProperty();
    //eslint-disable-next-line
  }, [isCommentAdded]);

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
        <View style={tw`py-8 px-8 bg-white`}>
          <OwnerProfile owner={property?.property.seller_id} />
          <View style={tw`flex items-center mb-4 mt-7`}>
            <BadgeFilled
              text={`${
                property.property.status !== 'sold' && 'For'
              } ${capitalizeFirstLetter(property.property.status)}`}
            />
          </View>
          <View style={tw`flex items-center`}>
            <Date date={property.property.createdAt} />
          </View>
          <View style={tw`flex items-center mt-4 mb-7`}>
            <CommentsCount
              comments={property.property.property_total_reviews}
            />
          </View>
          <View>
            <TextMedium text={property.property.title} />
          </View>
          <View style={tw`my-5`}>
            <Location location={property.property.property_address.address} />
          </View>
          <View style={tw`my-5`}>
            <HeadingBordered text="Description" />
          </View>
          <View style={tw`my-5`}>
            <TextSm align="left" text={property.property.description} />
          </View>
          <View style={tw`my-5`}>
            <HeadingBordered text="Property Detail" />
          </View>
          <View style={tw`my-5`}>
            <PropertyChart property={property.property} />
          </View>
          <View style={tw`mt-5`}>
            <HeadingBordered text="Facts And Features" />
            <FactsAndFeatures />
          </View>
          <View style={tw`mb-5`}>
            <HeadingBordered text="From Our Gallery" />
            <OurGallery media={property.property.listing_media} />
          </View>
          <View style={tw`mb-5`}>
            <HeadingBordered text="Amenities" />
            <Amenities
              propert_amenities={property.property.property_amenities}
            />
          </View>
          <View style={tw`my-5`}>
            <HeadingBordered text="Location" />
            <View style={tw`mt-7 overflow-hidden`}>
              <Map
                lat={property.property.property_address.lat}
                lng={property.property.property_address.lng}
                title="Property Address"
                description={property.property.property_address.address}
              />
            </View>
          </View>
          <View style={tw`my-5`}>
            <HeadingBordered text="Floor Plans" />
            <View style={tw`mt-7 mb-4`}>
              <Tabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </View>

            <View style={tw``}>
              <TabContent
                content={property.property.property_floors[activeTab]}
              />
            </View>
          </View>
          <View style={tw`my-5`}>
            <HeadingBordered text="Customer Reviews" />
            <PropertyStarRatings
              rating={property.property.property_average_rating}
              reviews={property.property.property_total_reviews}
            />
            <Comments comments={property.reviews} />
            <View style={tw`mt-10 mb-25`}>
              <AddReviewForm
                property_id={property.property._id}
                setIsCommentAdded={setIsCommentAdded}
              />
            </View>
          </View>
        </View>
        <PreFooter />
        <Footer />
      </ScrollView>
    </>
  );
};

export default PropertyScreen;
