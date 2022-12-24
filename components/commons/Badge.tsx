import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
const Badge = ({text}: {text: string}) => {
  return (
    <View style={tw`bg-red-100 text-red-500 rounded-full px-7 py-1`}>
      <Text adjustsFontSizeToFit style={[tw`text-red-500`, styles.text]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Badge;
