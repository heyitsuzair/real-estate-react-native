import {Image, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const OurGallery = ({media}: {media: string[]}) => {
  return (
    <View style={tw`mt-10`}>
      {media.map((pic, index) => {
        return (
          <View key={index} style={tw`mb-8`}>
            <Image
              source={{uri: pic.replace('http://', 'https://')}}
              style={tw`w-full h-54 rounded-md`}
              resizeMode="cover"
            />
          </View>
        );
      })}
    </View>
  );
};

export default OurGallery;
