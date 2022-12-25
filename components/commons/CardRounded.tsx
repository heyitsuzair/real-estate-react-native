import {StyleSheet, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import tw from 'twrnc';
import IconCircled from './IconCircled';

interface PropTypes {
  icon: string | undefined;
  text: string;
  onPress: () => void;
}

const CardRounded = ({icon, text, onPress}: PropTypes) => {
  const [isPress, setIsPress] = React.useState<boolean>(false);

  const styles = StyleSheet.create({
    cardNormal: tw`py-2 bg-white rounded-lg py-14 shadow-xl w-80`,
    cardHover: tw`py-2 rounded-lg shadow-xl py-14 w-80`,
    textColor: isPress ? tw`text-white` : tw`text-black`,
    poppins: {
      fontFamily: 'Poppins-Bold',
    },
  });

  var touchProps = {
    activeOpacity: 1,
    underlayColor: 'red',
    style: isPress ? styles.cardHover : styles.cardNormal,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {
      onPress();
    },
  };

  return (
    <>
      <TouchableHighlight {...touchProps}>
        <View style={tw`items-center`}>
          <IconCircled icon={icon ? icon : ''} />
          <View style={[tw`pt-10`, styles.textColor]}>
            <Text
              adjustsFontSizeToFit
              style={[tw`text-xl`, styles.poppins, styles.textColor]}>
              {text}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </>
  );
};

export default CardRounded;
