import {StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import tw from 'twrnc';

const TextXLBolded = ({text}: {text: string}) => {
  return (
    <Text adjustsFontSizeToFit style={[tw`text-xl text-black`, styles.text]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Bold',
  },
});
export default TextXLBolded;
