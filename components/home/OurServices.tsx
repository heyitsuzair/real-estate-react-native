import {View} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import Badge from '../commons/Badge';
import TextSemiLarge from '../commons/TextSemiLarge';
import IconnedCard from '../commons/IconnedCard';
import {useCountUp} from 'use-count-up';
import {MainFocusCards} from '../../cards';

const OurServices = () => {
  const [activeCard, setActiveCard] = useState<null | number>(null);

  const [isCounting, setIsCounting] = useState<boolean>(false);

  /**
   * Using Count Up For Line Animation Under Card
   */
  const {value, reset} = useCountUp({
    isCounting,
    end: 80,
    duration: 1.5,
  });

  return (
    <View style={tw`bg-white py-20 px-5 items-center`}>
      <Badge text="Our Services" />
      <View style={tw`my-8`}>
        <TextSemiLarge align="center" text="Our Main Focus" />
      </View>
      <View>
        {MainFocusCards.map((focus, index) => {
          return (
            <View style={tw`my-3`} key={index}>
              <IconnedCard
                index={index}
                width={value ? value.toString() : '0'}
                reset={reset}
                setIsCounting={setIsCounting}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
                icon={focus.icon}
                heading={focus.heading}
                description={focus.description}
                buttonText={focus.buttonText}
                buttonIcon={focus.buttonIcon}
                navigateTo={focus.navigateTo}
                navigationType={focus.navigationType}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default OurServices;
