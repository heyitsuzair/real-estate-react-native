import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface PropTypes {
  title: string | undefined;
  description: string | undefined;
  icon: string;
}

const IconWithTitleDescription = ({title, description, icon}: PropTypes) => {
  return (
    <View style={tw`flex flex-row items-center`}>
      <View
        style={tw`bg-red-100 flex items-center justify-center w-10 h-10 rounded-full`}>
        <Icon name={icon} color="red" size={20} />
      </View>
      <View style={tw`mx-3`}>
        {title && (
          <Text style={[tw`text-black font-semibold`, styles.title]}>
            {title}
          </Text>
        )}
        {description && <Text>{description}</Text>}
      </View>
    </View>
  );
};

export default IconWithTitleDescription;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Medium',
  },
});
