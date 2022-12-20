import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import TextSemiLarge from './TextSemiLarge';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native-paper';

const image = require('../../assets/img/14.jpg');

const Breadcrumb = ({text}: {text: string}) => {
  return (
    <View>
      <Image source={image} resizeMode="cover" style={styles.bgImage} />
      <View style={tw`absolute top-10 left-6`}>
        <TextSemiLarge text={text} />
        <View style={tw`mt-3 flex flex-row items-center`}>
          <Icon name="home" style={tw`text-red-500`} size={17} />
          <Text style={[tw`mx-2 text-gray-500 mt-1`, styles.text]}>Home</Text>
          <Icon
            name="chevron-right"
            style={tw`text-black mx-1 mt-0.5`}
            size={10}
          />
          <Text style={[tw`mx-2 text-red-500 mt-1`, styles.textSemiBold]}>
            {text}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: '180%',
  },
  text: {
    fontFamily: 'Poppins-Medium',
  },
  textSemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Breadcrumb;
