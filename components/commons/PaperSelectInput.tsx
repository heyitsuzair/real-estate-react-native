import {View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import tw from 'twrnc';
import ErrorMsg from './ErrorMsg';

interface PropTypes {
  value: string;
  onSelect: any;
  list: any[];
  error: string | boolean | undefined;
  errorText: string | undefined;
}

const PaperSelectInput = ({
  value,
  onSelect,
  list,
  error,
  errorText,
}: PropTypes) => {
  return (
    <>
      <View style={tw`border border-gray-200 rounded-lg`}>
        <Picker
          selectedValue={value}
          onValueChange={itemValue => onSelect(itemValue)}>
          {list.map(item => {
            return (
              <Picker.Item
                key={item.text}
                label={item.text}
                value={item.value}
              />
            );
          })}
        </Picker>
      </View>
      {error && <ErrorMsg error={errorText} />}
    </>
  );
};

export default PaperSelectInput;
