import {View, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Badge from '../commons/Badge';
import DottedTextSemiLarge from '../commons/DottedTextSemiLarge';
import TextSm from '../commons/TextSm';
import IconWithTitleDescription from '../commons/IconWithTitleDescription';
import Quotation from '../commons/Quotation';
import ButtonRed from '../commons/ButtonRed';
import {useNavigation} from '@react-navigation/native';
import ButtonTextIcon from '../commons/ButtonTextIcon';

const image = require('../../assets/img/7.png');

const AboutSection = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`mt-27 p-7 items-start bg-white`}>
      <Image resizeMode="contain" style={tw`w-full`} source={image} />
      <View style={tw`ml-4 -mt-28 items-start`}>
        <Badge text="About Us" />
        <View style={tw`my-6`}>
          <DottedTextSemiLarge
            align="left"
            text="The Leading Real Estate Rental Marketplace"
          />
        </View>
        <View style={tw`mb-6`}>
          <TextSm text="Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services" />
        </View>
        <View>
          <View style={tw`my-3`}>
            <IconWithTitleDescription
              icon="home"
              description={undefined}
              title="Smart Home Design"
            />
          </View>
          <View style={tw`my-3`}>
            <IconWithTitleDescription
              icon="image-outline"
              description={undefined}
              title="Beautiful Scene Around"
            />
          </View>
          <View style={tw`my-3`}>
            <IconWithTitleDescription
              icon="dumbbell"
              description={undefined}
              title="Exceptional Lifestyle"
            />
          </View>
          <View style={tw`my-3`}>
            <IconWithTitleDescription
              icon="shield-half-full"
              description={undefined}
              title="Complete 24/7 Security"
            />
          </View>
          <View style={tw`my-8`}>
            <Quotation
              text="Enimad minim veniam quis nostrud exercitation llamco laboris. Lorem ipsum dolor sit amet"
              borderSide="left"
              color="red"
            />
          </View>
          <View style={tw`mb-8 w-34`}>
            <ButtonTextIcon
              text="Contact Us"
              iconPosition={undefined}
              initialColor="red"
              icon={undefined}
              onPress={() => navigation.navigate('contact')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutSection;
