import {StyleSheet, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface PropTypes {
  icon: string;
  text: string;
  initialColor: 'white' | 'red';
  iconPosition: 'left' | 'right';
  onPress: () => void;
}

const ButtonTextIcon = ({
  icon,
  text,
  onPress,
  initialColor,
  iconPosition,
}: PropTypes) => {
  const [isPress, setIsPress] = React.useState(false);

  const styles = StyleSheet.create({
    btnNormal: tw`${
      initialColor === 'red' ? 'bg-red-500' : 'bg-white'
    } py-2 tracking-wider text-sm rounded`,
    btnPress: tw`py-2 text-black tracking-wider text-sm rounded`,
    textColor: isPress
      ? tw`text-white`
      : tw`${initialColor === 'red' ? 'text-white' : 'text-black'}`,
    poppins: {
      fontFamily: 'Poppins-Medium',
    },
  });

  var touchProps = {
    activeOpacity: 1,
    underlayColor: '#1E293B',
    style: isPress ? styles.btnPress : styles.btnNormal,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {
      onPress();
    },
  };

  return (
    <>
      <TouchableHighlight {...touchProps}>
        <View style={tw`flex flex-row justify-center items-center`}>
          {iconPosition === 'left' && (
            <Icon name={icon} style={[tw`ml-2`, styles.textColor]} size={17} />
          )}
          <Text style={[styles.textColor, styles.poppins, tw`mt-0.5`]}>
            {text}
          </Text>
          {iconPosition === 'right' && (
            <Icon name={icon} style={[tw`ml-2`, styles.textColor]} size={17} />
          )}
        </View>
      </TouchableHighlight>
    </>
  );
};

export default ButtonTextIcon;
