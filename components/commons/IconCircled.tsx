import {View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface PropTypes {
  icon: string;
}

const IconCircled = ({icon}: PropTypes) => {
  return (
    <View style={tw`flex flex-row items-center`}>
      <View
        style={tw`bg-red-100 flex items-center justify-center w-15 h-15 rounded-full`}>
        <Icon name={icon} color="red" size={30} />
      </View>
    </View>
  );
};

export default IconCircled;
