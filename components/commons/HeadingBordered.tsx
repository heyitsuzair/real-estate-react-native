import {StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import tw from 'twrnc';

const HeadingBordered = ({text}: {text: string}) => {
  return (
    <Text
      adjustsFontSizeToFit
      style={[tw`text-base border-l-2 border-red-500 pl-3.5`, styles.text]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Medium',
  },
});
export default HeadingBordered;
