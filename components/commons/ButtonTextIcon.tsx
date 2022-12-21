import {StyleSheet, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Feather';

interface PropTypes {
  icon: string;
  text: string;
  onPress: () => void;
}

const ButtonTextIcon = ({icon, text, onPress}: PropTypes) => {
  const [isPress, setIsPress] = React.useState(false);

  const styles = StyleSheet.create({
    btnNormal: tw`bg-white py-2 tracking-wider text-sm rounded`,
    btnPress: tw`py-2 text-black tracking-wider text-sm rounded`,
    textColor: isPress ? tw`text-white` : tw`text-black`,
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
          <Text style={[styles.textColor, styles.poppins, tw`mt-0.5`]}>
            {text}
          </Text>
          <Icon name={icon} style={[tw`ml-2`, styles.textColor]} size={20} />
        </View>
      </TouchableHighlight>
    </>
  );
};

export default ButtonTextIcon;
