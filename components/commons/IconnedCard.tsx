import {Pressable, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import tw from 'twrnc';
import TextXLBolded from './TextXLBolded';
import IconCircled from './IconCircled';
import TextSm from './TextSm';
import {useNavigation} from '@react-navigation/native';
import ButtonTextIconRounded from './ButtonTextIconRounded';

interface PropTypes {
  index: number;
  activeCard: null | number;
  setActiveCard: Dispatch<SetStateAction<number | null>>;
  icon: string | undefined;
  heading: string | undefined;
  description: string | undefined;
  buttonText: string;
  buttonIcon: string | undefined;
  navigateTo: string | undefined;
  width: string;
  setIsCounting: Dispatch<SetStateAction<boolean>>;
  reset: () => void;
}

const IconnedCard = ({
  index,
  activeCard,
  setActiveCard,
  icon,
  heading,
  description,
  buttonText,
  buttonIcon,
  navigateTo,
  width,
  setIsCounting,
  reset,
}: PropTypes) => {
  const navigation = useNavigation();

  /**
   * Border Width For Active Card
   */
  const borderWidth = index === activeCard ? `w-${width}` : 'w-0';

  const onPressCard = () => {
    /**
     * If Clicked On Already Active Card Than Return
     */
    if (index === activeCard) {
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
     * Set The Card Index To Active Card So Only Pressed Card Will Be Active , Not All
     */
    setActiveCard(index);
  };

  return (
    <Pressable onPress={() => onPressCard()}>
      <View style={tw`shadow-xl px-8 w-70 bg-white items-center`}>
        {icon && (
          <View style={tw`mt-5`}>
            <IconCircled icon={icon} />
          </View>
        )}
        {heading && (
          <View style={tw`my-5`}>
            <TextXLBolded text="Buy A Home" />
          </View>
        )}
        {description && (
          <View style={tw`mb-5`}>
            <TextSm
              align="center"
              text="Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home."
            />
          </View>
        )}
        <View style={tw`mb-5 w-46`}>
          <ButtonTextIconRounded
            icon={buttonIcon && buttonIcon}
            iconPosition="right"
            text={buttonText}
            initialColor="red"
            onPress={() => navigation.navigate(navigateTo)}
          />
        </View>
        <View style={tw`border-b-4 ${borderWidth} border-red-500`} />
      </View>
    </Pressable>
  );
};

export default IconnedCard;
