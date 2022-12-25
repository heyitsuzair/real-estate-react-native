import {Image, StyleSheet, Text, Pressable, View, Linking} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const image_1 = require('../../assets/img/email.png');
const image_2 = require('../../assets/img/11.png');
const image_3 = require('../../assets/img/12.png');

const ContactCards = () => {
  return (
    <>
      <View
        style={tw`border-gray-200 border flex flex-col items-center mt-10 mb-7 w-85 py-10`}>
        <Image source={image_1} resizeMode="cover" />
        <Text
          adjustsFontSizeToFit
          style={[tw`my-6 text-2xl text-black`, styles.textBold]}>
          Email Address
        </Text>
        <Pressable
          onPress={() => Linking.openURL('mailto:uzairdevil354123@gmail.com')}
          children={({pressed}) => (
            <Text
              adjustsFontSizeToFit
              style={[
                tw`${pressed ? 'text-red-500' : 'text-gray-500'}`,
                styles.textMedium,
              ]}>
              uzairdevil354123@gmail.com
            </Text>
          )}
        />
      </View>
      <View
        style={tw`border-gray-200 border flex flex-col items-center mt-3 mb-6 w-85 py-10`}>
        <Image source={image_2} resizeMode="cover" />
        <Text
          adjustsFontSizeToFit
          style={[tw`my-6 text-2xl text-black`, styles.textBold]}>
          Phone Number
        </Text>
        <Pressable
          onPress={() => Linking.openURL('tel:03104864150')}
          children={({pressed}) => (
            <Text
              adjustsFontSizeToFit
              style={[
                tw`${pressed ? 'text-red-500' : 'text-gray-500'}`,
                styles.textMedium,
              ]}>
              03104864150
            </Text>
          )}
        />
      </View>
      <View
        style={tw`border-gray-200 border flex flex-col items-center mt-3 mb-6 w-85 py-10`}>
        <Image source={image_3} resizeMode="cover" />
        <Text
          adjustsFontSizeToFit
          style={[tw`my-6 text-2xl text-black`, styles.textBold]}>
          Office Address
        </Text>
        <Text
          adjustsFontSizeToFit
          style={[tw`text-gray-500`, styles.textMedium]}>
          Lahore, Pakistan
        </Text>
      </View>
    </>
  );
};

export default ContactCards;

const styles = StyleSheet.create({
  textBold: {
    fontFamily: 'Poppins-Bold',
  },
  textMedium: {
    fontFamily: 'Poppins-Medium',
  },
});
