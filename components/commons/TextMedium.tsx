import {StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import tw from 'twrnc';

const TextMedium = ({text}: {text: string}) => {
  return (
    <Text adjustsFontSizeToFit style={[tw`text-xl`, styles.text]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Bold',
  },
});
export default TextMedium;
