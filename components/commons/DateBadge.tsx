import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import moment from 'moment';

const DateBadge = ({fullDate}: {fullDate: string}) => {
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const dateFormated = moment(fullDate).format('MMMM D, YYYY');
    setDate(dateFormated);

    //eslint-disable-next-line
  }, []);

  return (
    <View
      style={[
        tw`text-gray-600 border-gray-300 border-2  py-1 px-3 rounded-full text-sm`,
        styles.poppins,
      ]}>
      <Text>{date}</Text>
    </View>
  );
};

export default DateBadge;

const styles = StyleSheet.create({
  poppins: {
    fontFamily: 'Poppins-Medium',
  },
});
