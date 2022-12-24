import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const ListingsCard = ({property}: any) => {
  const navigation = useNavigation();
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
        navigation.navigate('property', {
          id: property._id,
        })
      }>
      <View style={tw`bg-white pb-8 rounded-xl  shadow-lg`}>
        <Image
          source={{
            uri: property.listing_media[0].replace('http://', 'https://'),
          }}
          style={tw`w-full h-44 mx-auto rounded-t-xl`}
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
          style={[
            tw`px-4 py-1 text-xl min-h-[16%] max-h-[17%] text-black`,
            styles.title,
          ]}>
          {property.title}
        </Text>
        <Text
          adjustsFontSizeToFit
          style={[
            tw`px-4 py-1 text-xl text-gray-400 text-base`,
            styles.description,
          ]}>
          {property.description.substring(0, 30)}{' '}
          {property.description.length > 30 && '...'}
        </Text>
        <View
          style={tw`px-4 flex py-3 items-center justify-between flex-row border-t mt-5 border-slate-300`}>
          <View style={tw`flex flex-row`}>
            <View
              style={[
                tw`w-12 h-12 flex items-center justify-center mx-auto rounded-full`,
                styles.avatar,
              ]}>
              <Text adjustsFontSizeToFit style={[tw`text-white `]}>
                {property.seller_id.name.slice(0, 1).toUpperCase()}
              </Text>
            </View>
            <View style={tw`flex`}>
              <Text
                adjustsFontSizeToFit
                style={[
                  tw`text-lg mx-2 text-black font-semibold`,
                  styles.poppinsSemiBold,
                ]}>
                {property.seller_id.name}
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
          <View
            style={tw`w-12 h-12 bg-red-500 flex items-center justify-center rounded-full`}>
            <Icon name="external-link" color="white" size={20} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ListingsCard;
