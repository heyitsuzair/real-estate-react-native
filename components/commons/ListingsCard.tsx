import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {ActivityIndicator, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const ListingsCard = ({
  property,
  totalDocs,
  index,
  isLoadingOnEnd,
  hasNextPage,
}: any) => {
  const navigation = useNavigation();
  const color = () => {
    /**
     * Generate Random Colors For Avatar
     */
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  const styles = StyleSheet.create({
    price: {
      fontFamily: 'Poppins-SemiBold',
    },
    title: {
      fontFamily: 'Poppins-Bold',
    },
    description: {
      fontFamily: 'Poppins-Medium',
    },
    avatar: {
      backgroundColor: color(),
    },
    poppinsSemiBold: {
      fontFamily: 'Poppins-SemiBold',
    },
  });

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('product', {
          id: property._id,
        })
      }>
      <View style={tw`bg-white rounded-xl mb-10`}>
        <Image
          source={{uri: property.listing_media[0]}}
          style={tw`w-full h-60 mx-auto rounded-t-xl`}
          resizeMode="cover"
        />
        <Text
          adjustsFontSizeToFit
          style={[tw`px-4 py-2 mt-2 text-lg text-red-500`, styles.price]}>
          {property.before_price_label && property.after_price_label + '/'} Rs
          {property.price}
          {property.after_price_label && '/' + property.after_price_label}
        </Text>
        <Text
          adjustsFontSizeToFit
          style={[tw`px-4 py-1 text-xl text-black`, styles.title]}>
          Diamond Minor Apartment
        </Text>
        <Text
          adjustsFontSizeToFit
          style={[
            tw`px-4 py-1 text-xl text-gray-400 text-base`,
            styles.description,
          ]}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, ut?...
        </Text>
        <View
          style={tw`px-4 flex py-3 items-center justify-between flex-row border-t mt-5 border-slate-300`}>
          <View style={tw`flex flex-row`}>
            <Text
              adjustsFontSizeToFit
              style={[tw`text-white py-4 px-5 rounded-full`, styles.avatar]}>
              M
            </Text>
            <View style={tw`flex`}>
              <Text
                adjustsFontSizeToFit
                style={[
                  tw`text-lg mx-2 text-black font-semibold`,
                  styles.poppinsSemiBold,
                ]}>
                Muhammad Uzair
              </Text>
              <Text
                adjustsFontSizeToFit
                style={[
                  tw`mx-2 text-sm text-gray-400 font-medium`,
                  styles.poppinsSemiBold,
                ]}>
                Estate Agent
              </Text>
            </View>
          </View>
          <View>
            <Button style={tw`bg-red-500 px-2 py-3 rounded-full`}>
              <Icon name="external-link" color="white" size={20} />
            </Button>
          </View>
        </View>
      </View>
      <View style={tw`mb-10 -mt-6`}>
        {index + 1 === totalDocs && isLoadingOnEnd && (
          <ActivityIndicator style={tw`my-3`} color="red" size={35} />
        )}
        {index + 1 === totalDocs && !hasNextPage && (
          <View style={tw`flex flex-row justify-center mb-7 mt-3 items-center`}>
            <View
              style={tw`mx-2 -ml-2 border-2 border-red-500 p-2 rounded-full`}>
              <Icon name="check" color="red" size={25} />
            </View>
            <Text
              adjustsFontSizeToFit
              style={[
                tw`text-center text-lg text-black mt-1`,
                styles.poppinsSemiBold,
              ]}>
              You're All Caught Up
            </Text>
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default ListingsCard;
