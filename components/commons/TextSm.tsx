import {StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import tw from 'twrnc';

const TextSm = ({
  text,
  align,
}: {
  text: string;
  align: 'left' | 'right' | 'center';
}) => {
  const alignment = align && 'text-' + align;
  return (
    <Text
      adjustsFontSizeToFit
      style={[tw`text-base text-slate-500 ${alignment}`, styles.text]}>
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
