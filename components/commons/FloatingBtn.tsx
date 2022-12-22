import {Pressable} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface PropTypes {
  color: 'slate' | 'red';
  icon: string;
  onPress: () => void;
}

const FloatingBtn = ({color, icon, onPress}: PropTypes) => {
  return (
    <Pressable
      style={tw`w-14 h-14 shadow-xl rounded-full absolute right-4 bottom-4 z-10 ${
        color === 'slate' ? 'bg-slate-800' : 'bg-red-500'
      } flex items-center justify-center`}
      onPress={() => onPress()}>
      <Icon name={icon} color="white" size={20} />
    </Pressable>
  );
};

export default FloatingBtn;
