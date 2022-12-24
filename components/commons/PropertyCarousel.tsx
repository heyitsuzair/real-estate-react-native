import {View} from 'react-native';
import React from 'react';
import Slick from 'react-native-slick';
import tw from 'twrnc';
import ListingsCard from './ListingsCard';

const PropertyCarousel = ({properties}: {properties: any}) => {
  return (
    <Slick
      style={tw`h-130`}
      showsPagination={true}
      dotStyle={tw`mx-4 w-2.5 h-2.5 rounded-full`}
      activeDotColor="#ef4444"
      activeDotStyle={tw`w-4 h-4 mx-4 rounded-full`}
      showsButtons={false}>
      {properties.map((property: any, index: number) => {
        return (
          <View key={index} style={tw`mx-2`}>
            <ListingsCard property={property} />
          </View>
        );
      })}
    </Slick>
  );
};

export default PropertyCarousel;
