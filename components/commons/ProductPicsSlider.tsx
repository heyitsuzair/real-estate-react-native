import {Image, View} from 'react-native';
import React from 'react';
import Slick from 'react-native-slick';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Feather';

const ProductPicsSlider = ({media}: {media: string[]}) => {
  return (
    <Slick
      style={tw`h-50`}
      showsPagination={false}
      showsButtons={true}
      nextButton={
        <View style={tw`bg-red-500 p-3 rounded-full mx-2`}>
          <Icon name="arrow-right" color="white" size={28} />
        </View>
      }
      prevButton={
        <View style={tw`bg-red-500 p-3 rounded-full mx-2`}>
          <Icon name="arrow-left" color="white" size={28} />
        </View>
      }>
      {media.map((pic: string, index: number) => {
        return (
          <View key={index}>
            <Image
              source={{uri: pic.replace('http://', 'https://')}}
              style={tw`w-full h-50`}
              resizeMode="cover"
            />
          </View>
        );
      })}
    </Slick>
  );
};

export default ProductPicsSlider;
