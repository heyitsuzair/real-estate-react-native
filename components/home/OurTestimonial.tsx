import {View} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import TextSemiLarge from '../commons/TextSemiLarge';
import Badge from '../commons/Badge';
import Testimonial from '../commons/Testimonial';
import {OurTestimonialCards} from '../../cards';
import {useCountUp} from 'use-count-up';

const OurTestimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<null | number>(
    null,
  );

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
    <View style={tw`bg-slate-200 pt-20 pb-34 px-5 items-center`}>
      <Badge text="Our Testimonial" />
      <View style={tw`my-8`}>
        <TextSemiLarge align="center" text="Clients Feedback" />
      </View>
      <View>
        {OurTestimonialCards.map((card, index) => {
          return (
            <Testimonial
              width={value}
              reset={reset}
              index={index}
              setIsCounting={setIsCounting}
              setActiveTestimonial={setActiveTestimonial}
              activeTestimonial={activeTestimonial}
              key={index}
              name={card.name}
              comment={card.review}
            />
          );
        })}
      </View>
    </View>
  );
};

export default OurTestimonial;
