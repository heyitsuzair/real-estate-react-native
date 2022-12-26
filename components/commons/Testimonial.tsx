import {Image, Pressable, StyleSheet, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import TextSm from './TextSm';
import tw from 'twrnc';
import {Text} from 'react-native-paper';
import {ReturnValue} from 'use-count-up';

const author = require('../../assets/img/author.jpg');

interface PropTypes {
  name: string;
  comment: string;
  activeTestimonial: number | null;
  width: ReturnValue;
  index: number;
  setIsCounting: Dispatch<SetStateAction<boolean>>;
  reset: () => void;
  setActiveTestimonial: Dispatch<SetStateAction<number | null>>;
}

const Testimonial = ({
  name,
  comment,
  width,
  activeTestimonial,
  index,
  setIsCounting,
  reset,
  setActiveTestimonial,
}: PropTypes) => {
  /**
   * Border Width For Active Testimonial
   */
  const borderWidth = index === activeTestimonial ? `w-${width}` : 'w-0';

  const onPressTestimonial = () => {
    /**
     * If Clicked On Already Active Testimonial Than Return
     */
    if (index === activeTestimonial) {
      return;
    }
    /**
     * Reset The Width To Zero Again
     */
    reset();
    /**
     * After Resetting Width Start Counting (Increasing Width)
     */
    setIsCounting(true);
    /**
     * Set The Testimonial Index To Active Testimonial So Only Pressed Testimonial Will Be Active , Not All
     */
    setActiveTestimonial(index);
  };

  return (
    <Pressable onPress={() => onPressTestimonial()}>
      <View style={tw`rounded shadow-xl my-4 items-center w-80 bg-white`}>
        <View style={tw`p-8`}>
          <TextSm align="left" text={comment} />
          <View style={tw`flex-row items-center mt-5`}>
            <View>
              <Image
                source={author}
                resizeMode="cover"
                style={tw`w-15 h-15 rounded-full`}
              />
            </View>
            <View>
              <Text
                adjustsFontSizeToFit
                style={[
                  tw`text-lg mx-2 text-black font-semibold`,
                  styles.poppinsSemiBold,
                ]}>
                {name}
              </Text>
              <Text
                adjustsFontSizeToFit
                style={[
                  tw`mx-2 text-sm text-gray-400 font-medium`,
                  styles.poppinsSemiBold,
                ]}>
                Estate Agent
              </Text>
            </View>
          </View>
        </View>
        <View style={tw`border-b-4 ${borderWidth} border-red-500`} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  poppinsSemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Testimonial;
