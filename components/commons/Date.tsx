import {Text, View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome5';
import tw from 'twrnc';

const Date = ({date}: {date: string}) => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    /**
     * Converting Date Into From Now Format
     */
    const ago = moment(date).fromNow();
    setCurrentDate(ago);
    //eslint-disable-next-line
  }, []);

  return (
    <View style={tw`flex flex-row items-center`}>
      <Icon name="calendar-alt" color="red" size={20} />
      <Text style={[styles.poppinsMedium, tw`mt-1.5 ml-2`]}>{currentDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  poppinsMedium: {
    fontFamily: 'Poppins-Medium',
  },
});

export default Date;
