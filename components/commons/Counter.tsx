import {useCountUp} from 'use-count-up';
import React, {useState} from 'react';
import TextSemiLarge from './TextSemiLarge';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc';
import {View} from 'react-native-animatable';
import TextSm from './TextSm';
import {InView} from 'react-native-intersection-observer';

interface PropTypes {
  end: number;
  icon: string;
  text: string;
}

const Counter = ({end, icon, text}: PropTypes) => {
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const {value, reset} = useCountUp({
    isCounting,
    end: end,
    duration: 1.5,
  });

  return (
    <InView
      style={tw`flex-1  items-center`}
      onChange={(inView: boolean) => {
        /**
         * Check If Counter Is Not In View Than Reset It
         */
        !inView && reset();
        setIsCounting(inView);
      }}>
      <Icon name={icon} color="red" size={50} />
      <View style={tw`my-3`}>
        <TextSemiLarge text={value + '+'} align="center" />
      </View>
      <View>
        <TextSm align="center" text={text} />
      </View>
    </InView>
  );
};
export default Counter;
