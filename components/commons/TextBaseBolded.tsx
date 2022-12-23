import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const TextBaseBolded = ({text}: {text: string}) => {
  const styles = StyleSheet.create({
    poppinsBold: {
      fontFamily: 'Poppins-Bold',
    },
  });
  return (
    <View>
      <Text
        adjustsFontSizeToFit
        style={[styles.poppinsBold, tw`text-black text-base`]}>
        {text}
      </Text>
    </View>
  );
};

export default TextBaseBolded;
