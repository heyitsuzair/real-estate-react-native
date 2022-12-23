import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const TextBaseSemiBolded = ({text, color}: {text: string; color: string}) => {
  const textColor = 'text-' + color + '-500';

  const styles = StyleSheet.create({
    poppinsSemiBold: {
      fontFamily: 'Poppins-SemiBold',
    },
  });
  return (
    <View>
      <Text
        adjustsFontSizeToFit
        style={[styles.poppinsSemiBold, tw`text-base ${textColor} `]}>
        {text}
      </Text>
    </View>
  );
};

export default TextBaseSemiBolded;
