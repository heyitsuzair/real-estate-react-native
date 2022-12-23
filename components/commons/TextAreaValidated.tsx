import {StyleSheet} from 'react-native';
import React, {ChangeEvent} from 'react';
import {TextInput} from 'react-native-paper';
import ErrorMsg from './ErrorMsg';
import tw from 'twrnc';

interface PropTypes {
  value: string;
  error: boolean;
  errorText: string | boolean | undefined;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  label: string;
}

const TextAreaValidated = ({
  onChangeText,
  value,
  error,
  errorText,
  label,
}: PropTypes) => {
  return (
    <>
      <TextInput
        multiline
        mode="outlined"
        outlineColor="gray"
        activeOutlineColor="red"
        style={tw`bg-slate-100`}
        numberOfLines={5}
        textAlignVertical="top"
        label={label}
        value={value}
        onChangeText={onChangeText}
      />
      {error && <ErrorMsg error={errorText} />}
    </>
  );
};

export default TextAreaValidated;
