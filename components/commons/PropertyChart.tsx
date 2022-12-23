import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {capitalizeFirstLetter} from '../../utils';

const PropertyChart = ({property}: any) => {
  return (
    <View style={tw`bg-slate-100 p-8 rounded-md shadow-md`}>
      <View style={tw`flex flex-row`}>
        <View>
          <Text adjustsFontSizeToFit style={[tw`text-gray-500 mb-5.2`]}>
            Home Area:
          </Text>
          <Text adjustsFontSizeToFit style={[tw`text-gray-500 mb-5.2`]}>
            Baths:
          </Text>
          <Text adjustsFontSizeToFit style={[tw`text-gray-500 mb-5.2`]}>
            Bed Rooms:
          </Text>
          <Text adjustsFontSizeToFit style={[tw`text-gray-500 mb-5.2`]}>
            Year Built:
          </Text>
          <Text adjustsFontSizeToFit style={[tw`text-gray-500 mb-5.2`]}>
            Lot Size:
          </Text>
          <Text adjustsFontSizeToFit style={[tw`text-gray-500 mb-5.2`]}>
            Garages:
          </Text>
          <Text adjustsFontSizeToFit style={[tw`text-gray-500 mb-5.2`]}>
            Garages Size:
          </Text>
          <Text adjustsFontSizeToFit style={[tw`text-gray-500 mb-5.2`]}>
            Property Status:
          </Text>
        </View>
        <View>
          <Text
            adjustsFontSizeToFit
            style={[tw`text-black mb-4.05 mx-6`, styles.value]}>
            {property.property_size} SQFT
          </Text>
          <Text
            adjustsFontSizeToFit
            style={[tw`text-black mb-4.05 mx-6`, styles.value]}>
            {property.property_bath_rooms}
          </Text>
          <Text
            adjustsFontSizeToFit
            style={[tw`text-black mb-4.05 mx-6`, styles.value]}>
            {property.property_bed_rooms}
          </Text>
          <Text
            adjustsFontSizeToFit
            style={[tw`text-black mb-4.05 mx-6`, styles.value]}>
            {property.property_year_built}
          </Text>
          <Text
            adjustsFontSizeToFit
            style={[tw`text-black mb-4.05 mx-6`, styles.value]}>
            {property.property_lot_size} SQFT
          </Text>
          <Text
            adjustsFontSizeToFit
            style={[tw`text-black mb-4.05 mx-6`, styles.value]}>
            {property.property_garages}
          </Text>
          <Text
            adjustsFontSizeToFit
            style={[tw`text-black mb-4.05 mx-6`, styles.value]}>
            {property.property_garages_size} SQFT
          </Text>
          <Text
            adjustsFontSizeToFit
            style={[tw`text-black mb-3 mx-6`, styles.value]}>
            {property.status !== 'sold' && 'For'}{' '}
            {capitalizeFirstLetter(property.status)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PropertyChart;

const styles = StyleSheet.create({
  value: {
    fontFamily: 'Poppins-SemiBold',
  },
});
