import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import DelayInput from 'react-native-debounce-input';
import tw from 'twrnc';

interface PropTypes {
  placeholder: string;
  onChangeText: (text: string) => Promise<void>;
  value: string;
}

const TextInputDebounced = ({placeholder, onChangeText, value}: PropTypes) => {
  return (
    <View style={tw`bg-white p-1.5 border-b border-red-500`}>
      <DelayInput
        delayTimeout={2000}
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

export default TextInputDebounced;
