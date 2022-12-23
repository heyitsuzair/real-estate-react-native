import {StyleSheet} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';

const AvatarText = ({letter}: {letter: string}) => {
  /**
   * Generate Random Colors For Avatar
   */
  const color = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  const styles = StyleSheet.create({
    poppinsBold: {
      fontFamily: 'Poppins-Bold',
    },
    bgColor: {
      backgroundColor: color(),
    },
  });

  return (
    <Avatar.Text
      label={letter}
      color="white"
      style={[styles.poppinsBold, styles.bgColor]}
      size={80}
    />
  );
};

export default AvatarText;
