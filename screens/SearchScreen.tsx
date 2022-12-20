import {useFormik} from 'formik';
import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import TextInputSimple from '../components/commons/TextInputSimple';
import {searchFormSchema} from '../yupSchemas';
import {debounce} from 'lodash';
import tw from 'twrnc';

const SearchScreen = () => {
  /**
   * State For Loading
   */
  const [isLoading, setisLoading] = useState<boolean>(true);

  /**
   * Function For Debounce
   */
  const handler = useCallback(
    debounce(() => {
      setisLoading(true);
      setTimeout(() => {
        setisLoading(false);
      }, 1500);
    }, 1500),
    [],
  );

  const initialValues = {
    query: '',
  };

  const {values, setFieldValue} = useFormik({
    initialValues: initialValues,
    validationSchema: searchFormSchema,
    onSubmit: () => {},
  });

  // ?Handle On Change Search Input ------------->
  const handleChangeSearch = (text: string) => {
    setFieldValue('query', text);
    handler();
  };
  // !Handle On Change Search Input ------------->

  return (
    <>
      <TextInputSimple
        placeholder="Search Your Query"
        value={values.query}
        onChangeText={handleChangeSearch}
      />
      {values.query ? (
        isLoading ? (
          <View style={tw`flex items-center justify-center h-full`}>
            <ActivityIndicator color="red" size={60} />
          </View>
        ) : (
          <Text style={[styles.notTouched, tw`text-xl`]}>Loaded</Text>
        )
      ) : (
        <View style={tw`flex items-center justify-center h-full`}>
          <Text adjustsFontSizeToFit style={[styles.notTouched, tw`text-xl`]}>
            Please Type Something To Search
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  notTouched: {
    fontFamily: 'Poppins-SemiBold',
  },
});

export default SearchScreen;
