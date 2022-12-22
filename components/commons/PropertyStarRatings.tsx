import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StarRatings from './StarRatings';
import tw from 'twrnc';

const PropertyStarRatings = ({
  rating,
  reviews,
}: {
  rating: number;
  reviews: number;
}) => {
  return (
    <View style={tw`flex flex-row items-center my-6 -ml-2`}>
      <StarRatings rating={rating} onChange={() => {}} />
      <Text style={[tw`text-red-500 text-base mt-1`, styles.poppinsMedium]}>
        ({reviews} Reviews)
      </Text>
    </View>
  );
};

export default PropertyStarRatings;

const styles = StyleSheet.create({
  poppinsMedium: {
    fontFamily: 'Poppins-Medium',
  },
});
