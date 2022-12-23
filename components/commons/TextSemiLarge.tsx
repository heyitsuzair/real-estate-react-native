import {StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import tw from 'twrnc';

const TextSemiLarge = ({
  text,
  align,
}: {
  text: string;
  align: string | undefined;
}) => {
  const alignment = align ? 'text-' + align : '';

  return (
    <Text adjustsFontSizeToFit style={[tw`text-3xl ${alignment}`, styles.text]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Bold',
  },
});
export default TextSemiLarge;
