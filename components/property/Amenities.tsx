import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Checkbox, Text} from 'react-native-paper';
import {AminitiesCheckbox} from '../../checkboxes';
import tw from 'twrnc';

const Amenities = ({propert_amenities}: {propert_amenities: string[]}) => {
  return (
    <View style={tw`-ml-2.5 mt-5`}>
      {AminitiesCheckbox.map(checkbox => {
        // ?Check Whether The Checkbox Value Is Present In "property_amenitites" Array
        const valueLength = propert_amenities.find((item: string) => {
          return checkbox.value === item;
        })?.length;

        let checked = false;

        if (valueLength !== undefined && valueLength > 0) {
          checked = true;
        }
        // !Check Whether The Checkbox Value Is Present In "property_amenitites" Array

        return (
          <View key={checkbox.value} style={tw`flex flex-row items-center`}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              uncheckedColor="gray"
              color="red"
            />
            <Text style={[styles.text, tw`mt-1 text-gray-700`]}>
              {checkbox.value}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Medium',
  },
});

export default Amenities;
