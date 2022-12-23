import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const ErrorMsg = ({error}: {error: string | boolean | undefined}) => {
  return (
    <View>
      <Text style={[tw`text-red-500`, styles.poppinsMedium]}>{error}</Text>
    </View>
  );
};

export default ErrorMsg;

const styles = StyleSheet.create({
  poppinsMedium: {
    fontFamily: 'Poppins-Medium',
  },
});
