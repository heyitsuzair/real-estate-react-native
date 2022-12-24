import {useCountUp} from 'use-count-up';
import React from 'react';
import TextSemiLarge from './TextSemiLarge';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc';
import {View} from 'react-native-animatable';
import TextSm from './TextSm';

interface PropTypes {
  end: number;
  icon: string;
  text: string;
  isCounting: boolean;
}

const Counter = ({end, icon, text, isCounting}: PropTypes) => {
  const {value} = useCountUp({
    isCounting,
    end: end,
    duration: 1.5,
  });

  return (
    <View style={tw`flex-1 items-center`}>
      <Icon name={icon} color="red" size={50} />
      <View style={tw`my-3`}>
        <TextSemiLarge text={value + '+'} align="center" />
      </View>
      <View>
        <TextSm text={text} />
      </View>
    </View>
  );
};
export default Counter;
