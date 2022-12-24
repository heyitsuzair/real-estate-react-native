import {StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import tw from 'twrnc';

const DottedTextSemiLarge = ({
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
      <Text style={[tw`text-3xl text-red-500 ${alignment}`, styles.text]}>
        .
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Bold',
  },
});
export default DottedTextSemiLarge;
