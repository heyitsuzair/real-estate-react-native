import {View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import AvatarText from './AvatarText';
import TextBaseBolded from './TextBaseBolded';
import StarRatings from './StarRatings';
import TextBaseSemiBolded from './TextBaseSemiBolded';
import DateBadge from './DateBadge';
import TextSm from './TextSm';

interface PropTypes {
  comment: {
    _id: string;
    name: string;
    stars: number;
    createdAt: string;
    msg: string;
  };
}

const Comment = ({comment}: PropTypes) => {
  let star;

  /**
   * If Star Is One Than Concatenate "Star" Else "Stars"
   */
  if (comment.stars === 1) {
    star = comment.stars.toString() + ' Star';
  } else {
    star = comment.stars.toString() + ' Stars';
  }

  return (
    <View style={tw`flex items-center border-b pt-6 border-gray-300`}>
      <AvatarText letter={comment.name.charAt(0).toUpperCase()} />

      <View style={tw`my-3`}>
        <TextBaseBolded text={comment.name} />
      </View>

      <View style={tw`mb-3 flex flex-row`}>
        <StarRatings rating={comment.stars} onChange={() => {}} />
        <View style={tw`mt-0.5`}>
          <TextBaseSemiBolded text={star} color="red" />
        </View>
      </View>
      <View>
        <DateBadge fullDate={comment.createdAt} />
      </View>
      <View style={tw`my-5`}>
        <TextSm align="center" text={comment.msg} />
      </View>
    </View>
  );
};

export default Comment;
