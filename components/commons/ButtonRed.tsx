import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';

interface PropTypes {
  onPress: () => void;
  text: string;
}

const ButtonRed = ({text, onPress}: PropTypes) => {
  return (
    <Pressable
      style={tw`bg-red-500 shadow-red-900 shadow-2xl py-3 px-5 rounded-lg`}
      onPress={() => onPress()}>
      <Text style={[tw`text-white text-base`, styles.poppinsBold]}>{text}</Text>
    </Pressable>
  );
};

export default ButtonRed;

const styles = StyleSheet.create({
  poppinsBold: {
    fontFamily: 'Poppins-SemiBold',
  },
});
