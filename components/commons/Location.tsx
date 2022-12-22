import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

const Location = ({location}: {location: string}) => {
  return (
    <View style={tw`flex flex-row items-center`}>
      <Icon name="location-sharp" color="red" size={20} />
      <Text adjustsFontSizeToFit style={[styles.poppinsMedium, tw`mt-1 ml-2`]}>
        {location}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  poppinsMedium: {
    fontFamily: 'Poppins-Medium',
  },
});

export default Location;
