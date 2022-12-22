import {StyleSheet, Text, View, Linking} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import ButtonTextIcon from './ButtonTextIcon';
import StarRatings from './StarRatings';

interface PropTypes {
  owner: {
    name: string;
    phone_no: string;
    total_reviews: number;
    rating: number;
  };
}

const OwnerProfile = ({owner}: PropTypes) => {
  /**
   * Generate Random Colors For Avatar
   */
  const color = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  const styles = StyleSheet.create({
    avatar: {
      backgroundColor: color(),
    },
    poppinsBold: {
      fontFamily: 'Poppins-Bold',
    },
    poppinsMedium: {
      fontFamily: 'Poppins-Medium',
    },
  });
  return (
    <View
      style={tw`flex justify-center items-center px-6 border-2 border-gray-200 rounded-md text-center py-5`}>
      <View
        style={[
          tw`w-20 h-20 flex  items-center justify-center mx-auto rounded-full`,
          styles.avatar,
        ]}>
        <Text
          adjustsFontSizeToFit
          style={[tw`text-white text-xl`, styles.poppinsBold]}>
          {owner.name.slice(0, 1).toUpperCase()}
        </Text>
      </View>
      <View>
        <Text
          adjustsFontSizeToFit
          style={[tw`text-xl text-black my-3`, styles.poppinsBold]}>
          {owner.name}
        </Text>
      </View>
      <View>
        <Text
          adjustsFontSizeToFit
          style={[tw`text-base text-gray-500`, styles.poppinsMedium]}>
          Property Seller
        </Text>
      </View>
      <View style={tw`flex flex-row items-center my-2`}>
        <StarRatings rating={owner.rating} onChange={() => {}} />
        <Text style={[tw`text-red-500 text-base mt-1`, styles.poppinsMedium]}>
          ({owner.total_reviews} Reviews)
        </Text>
      </View>
      <View style={tw`w-full mt-4`}>
        <ButtonTextIcon
          onPress={() => Linking.openURL(`tel:${owner.phone_no}`)}
          text="Call Merchant"
          icon="phone-alt"
          iconPosition="right"
          initialColor="red"
        />
      </View>
    </View>
  );
};

export default OwnerProfile;
