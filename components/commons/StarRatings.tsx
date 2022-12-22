import StarRating from 'react-native-star-rating-widget';
import React from 'react';

interface PropTypes {
  rating: number;
  onChange: () => void | undefined;
}

const StarRatings = ({rating, onChange}: PropTypes) => {
  return (
    <StarRating
      enableHalfStar={false}
      emptyColor="gray"
      color="red"
      starSize={23}
      rating={rating}
      onChange={onChange}
    />
  );
};

export default StarRatings;
