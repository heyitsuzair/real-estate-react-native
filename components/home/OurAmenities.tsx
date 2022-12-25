import {View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Badge from '../commons/Badge';
import TextSemiLarge from '../commons/TextSemiLarge';
import {OurAminitesCard} from '../../cards';
import CardRounded from '../commons/CardRounded';
import {useNavigation} from '@react-navigation/native';

const OurAmenities = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`bg-white py-20 px-5 items-center`}>
      <Badge text="Our Services" />
      <View style={tw`my-8`}>
        <TextSemiLarge align="center" text="Our Amenities" />
      </View>
      <View>
        {OurAminitesCard.map((amenity, index: number) => {
          return (
            <View key={index} style={tw`my-5`}>
              <CardRounded
                icon={amenity.icon}
                text={amenity.text}
                onPress={() => navigation.navigate(amenity.navigateTo)}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default OurAmenities;
