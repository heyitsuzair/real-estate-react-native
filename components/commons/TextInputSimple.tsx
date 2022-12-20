import * as React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import tw from 'twrnc';

interface PropTypes {
  placeholder: string;
  onChangeText?: (obj: any) => void;
  value: string;
}

const TextInputSimple = ({placeholder, onChangeText, value}: PropTypes) => {
  return (
    <View style={tw`bg-white p-1.5 border-b border-red-500`}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.input}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Poppins-SemiBold',
  },
});

export default TextInputSimple;
