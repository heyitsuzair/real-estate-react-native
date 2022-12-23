import {View} from 'react-native';
import React from 'react';
import Comment from '../commons/Comment';

const Comments = ({comments}: any) => {
  return (
    <View>
      {comments.map((comment: {_id: string}) => {
        return <Comment key={comment._id} comment={comment} />;
      })}
    </View>
  );
};

export default Comments;
