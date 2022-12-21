import React from 'react';
import {View, StyleSheet, Linking} from 'react-native';
import {Text} from 'react-native-paper';
import tw from 'twrnc';

const Footer = () => {
  return (
    <View
      style={tw`bg-slate-800 border-t-2 border-red-500 flex items-center p-10`}>
      <Text style={[styles.text, tw`text-white text-xl`]}>
        All Rights Reserved ®
      </Text>
      <Text style={[styles.text, tw`text-white text-xl mt-6`]}>
        Made With ❤ By
        <Text
          onPress={() => Linking.openURL('https://github.com/heyitsuzair')}
          style={[styles.text, tw`text-red-500 text-xl`]}>
          {' '}
          UZAIR
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Bold',
  },
});

export default Footer;
