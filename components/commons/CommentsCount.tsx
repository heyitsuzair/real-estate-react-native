import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';

const CommentsCount = ({comments}: {comments: string}) => {
  return (
    <View style={tw`flex flex-row items-center`}>
      <Icon name="comments-o" color="red" size={20} />
      <Text style={[styles.poppinsMedium, tw`mt-1.5 ml-2`]}>
        {comments} Comments
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  poppinsMedium: {
    fontFamily: 'Poppins-Medium',
  },
});

export default CommentsCount;
