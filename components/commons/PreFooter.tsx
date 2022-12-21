import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import ButtonTextIcon from './ButtonTextIcon';
import {useNavigation} from '@react-navigation/native';

const PreFooter = () => {
  const navigation = useNavigation();

  /**
   * Handle When Someone Presses On Explore New Properties
   */
  const onPressExplore = (): void => {
    /**
     * Push It To Shop Screen
     */
    navigation.navigate('shop');
  };

  return (
    <View style={tw`bg-slate-800 mt-20`}>
      <View style={tw`bg-red-500 rounded w-4/5 relative bottom-20 mx-auto p-6`}>
        <Text style={[tw`text-lg text-white text-center`, styles.heading]}>
          Looking For A Dream House?
        </Text>
        <Text style={[tw`text-sm my-7 text-white text-center`, styles.heading]}>
          We can help you realize your dream of a new home
        </Text>
        <ButtonTextIcon
          icon="arrow-right"
          text="Explore New Properties"
          onPress={onPressExplore}
        />
      </View>
    </View>
  );
};

export default PreFooter;

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Poppins-SemiBold',
  },
});
