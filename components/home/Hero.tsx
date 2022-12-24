import {StyleSheet, View} from 'react-native';
import React from 'react';
import Slick from 'react-native-slick';
import Icon from 'react-native-vector-icons/Feather';
import Ioni from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native-paper';
import tw from 'twrnc';
import TextSmBlack from '../commons/TextSmBlack';
import TextSemiLarge from '../commons/TextSemiLarge';
import ButtonTextIcon from '../commons/ButtonTextIcon';
import {useNavigation} from '@react-navigation/native';
import FindNowContainer from './FindNowContainer';

const Hero = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`relative`}>
      <Slick
        style={tw`bg-slate-200 h-120`}
        showsPagination={false}
        showsButtons={true}
        nextButton={
          <View style={tw`bg-red-500 p-3 rounded-full mx-2`}>
            <Icon name="arrow-right" color="white" size={28} />
          </View>
        }
        prevButton={
          <View style={tw`bg-red-500 p-3 rounded-full mx-2`}>
            <Icon name="arrow-left" color="white" size={28} />
          </View>
        }>
        <View>
          <View style={tw`px-20 pt-1`}>
            <View style={tw`flex flex-row items-center mt-6`}>
              <Ioni name="home-sharp" color="red" size={14} />
              <View style={tw`mt-0.5 mx-2`}>
                <TextSmBlack text="Real Estate Agency" />
              </View>
            </View>
            <View style={tw`my-6`}>
              <TextSemiLarge align="left" text="Find Your Dream House By Us" />
            </View>
            <View style={tw`border-gray-300 pl-3 border-l-2`}>
              <Text
                adjustsFontSizeToFit
                style={[tw`text-base  text-slate-500`, styles.text]}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
                voluptas? Lorem ipsum dolor sit.
              </Text>
            </View>
            <View style={tw`my-6 w-2/3`}>
              <ButtonTextIcon
                text="Make An Enquiry"
                onPress={() => navigation.navigate('contact')}
                initialColor="red"
                icon={undefined}
                iconPosition={undefined}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={tw`px-20 pt-1`}>
            <View style={tw`flex flex-row items-center justify-end mt-6`}>
              <Ioni name="home-sharp" color="red" size={14} />
              <View style={tw`mt-0.5 mx-2`}>
                <TextSmBlack text="Real Estate Agency" />
              </View>
            </View>
            <View style={tw`my-6 flex`}>
              <TextSemiLarge align="right" text="Find Your Dream House By Us" />
            </View>
            <View style={tw`border-gray-300 pr-3 border-r-2`}>
              <Text
                adjustsFontSizeToFit
                style={[tw`text-base  text-slate-500`, styles.text]}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
                voluptas? Lorem ipsum dolor sit.
              </Text>
            </View>
            <View style={tw`my-6 w-2/3 ml-auto`}>
              <ButtonTextIcon
                text="Make An Enquiry"
                onPress={() => navigation.navigate('contact')}
                initialColor="red"
                icon={undefined}
                iconPosition={undefined}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={tw`px-20 pt-1`}>
            <View style={tw`flex flex-row items-center mt-6`}>
              <Ioni name="home-sharp" color="red" size={14} />
              <View style={tw`mt-0.5 mx-2`}>
                <TextSmBlack text="Real Estate Agency" />
              </View>
            </View>
            <View style={tw`my-6`}>
              <TextSemiLarge align="left" text="Find Your Dream House By Us" />
            </View>
            <View style={tw`border-gray-300 pl-3 border-l-2`}>
              <Text
                adjustsFontSizeToFit
                style={[tw`text-base  text-slate-500`, styles.text]}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
                voluptas? Lorem ipsum dolor sit.
              </Text>
            </View>
            <View style={tw`my-6 w-2/3`}>
              <ButtonTextIcon
                text="Make An Enquiry"
                onPress={() => navigation.navigate('contact')}
                initialColor="red"
                icon={undefined}
                iconPosition={undefined}
              />
            </View>
          </View>
        </View>
      </Slick>
      <View
        style={tw`top-100 bg-white mx-5 left-0 right-0 absolute p-5 rounded-lg shadow-2xl shadow-slate-300`}>
        <FindNowContainer />
      </View>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Medium',
  },
});
