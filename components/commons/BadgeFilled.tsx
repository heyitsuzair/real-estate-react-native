import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
const BadgeFilled = ({text}: {text: string}) => {
  return (
    <View style={tw`rounded-full bg-red-500 px-8 py-1.5`}>
      <Text
        style={[tw`text-center text-base text-white`, styles.poppinsSemiBold]}>
        {text}
      </Text>
    </View>
  );
};

export default BadgeFilled;

const styles = StyleSheet.create({
  poppinsSemiBold: {
    fontFamily: 'Poppins-Bold',
  },
});
