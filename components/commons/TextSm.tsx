import {StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import tw from 'twrnc';

const TextSm = ({text}: {text: string}) => {
  return (
    <Text
      adjustsFontSizeToFit
      style={[tw`text-base text-slate-500`, styles.text]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Medium',
  },
});
export default TextSm;
