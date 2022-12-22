import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import TextSemiLarge from './TextSemiLarge';
interface PropTypes {
  content: {
    floor_media: string;
    floor_heading: string;
    floor_description: string;
  };
}

const TabContent = ({content}: PropTypes) => {
  return (
    <View style={tw`bg-slate-100 p-0 rounded-md`}>
      <Image
        source={{uri: content.floor_media.replace('http', 'https')}}
        resizeMode="cover"
        style={tw`w-full h-90`}
      />
      <View style={tw`py-13 px-8 flex items-center`}>
        <TextSemiLarge text={content.floor_heading} />
        <Text
          adjustsFontSizeToFit
          style={[tw`text-base mt-5 text-center text-slate-500`, styles.text]}>
          {content.floor_description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Medium',
  },
});

export default TabContent;
