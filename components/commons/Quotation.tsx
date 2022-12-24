import {StyleSheet, View} from 'react-native';
import React from 'react';
import TextSm from './TextSm';
import tw from 'twrnc';

const Quotation = ({
  text,
  borderSide,
  color,
}: {
  text: string;
  borderSide: 'left' | 'right';
  color: string;
}) => {
  const border = 'border-' + borderSide.charAt(0) + '-4';
  const borderColor = 'border-' + color + '-500';
  const paddingSide = borderSide === 'left' ? 'pl-7 pr-7' : 'pr-7 pl-7';
  const bgColor = 'bg-' + color + '-100';

  return (
    <View style={tw`${border} ${paddingSide} ${bgColor} ${borderColor} py-5`}>
      <TextSm text={`" ${text} "`} />
    </View>
  );
};

export default Quotation;

const styles = StyleSheet.create({});
