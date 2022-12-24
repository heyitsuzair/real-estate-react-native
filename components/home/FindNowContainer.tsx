import {StyleSheet, View} from 'react-native';
import React from 'react';
import {AreaMenu, PropertyStatus, PropertyType} from '../../menus';
import {useFormik} from 'formik';
import {FindNowSchema} from '../../yupSchemas';
import PaperSelectInput from '../commons/PaperSelectInput';
import tw from 'twrnc';
import ButtonRed from '../commons/ButtonRed';

const FindNowContainer = () => {
  const initialValues = {
    area: '',
    status: '',
    type: '',
  };

  const {values, errors, touched, handleChange, handleSubmit} = useFormik({
    initialValues,
    validationSchema: FindNowSchema,
    onSubmit: (values, action) => {
      console.log(values);
    },
  });

  return (
    <View>
      <View style={tw`mb-4`}>
        <PaperSelectInput
          list={AreaMenu}
          onSelect={handleChange('area')}
          value={values.area}
          error={errors.area && touched.area}
          errorText={errors.area}
        />
      </View>
      <View style={tw`mb-4`}>
        <PaperSelectInput
          list={PropertyStatus}
          onSelect={handleChange('status')}
          value={values.status}
          error={errors.status && touched.status}
          errorText={errors.status}
        />
      </View>
      <View style={tw`mb-4`}>
        <PaperSelectInput
          list={PropertyType}
          onSelect={handleChange('type')}
          value={values.type}
          error={errors.type && touched.type}
          errorText={errors.type}
        />
      </View>
      <View>
        <ButtonRed text="Find Now" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default FindNowContainer;

const styles = StyleSheet.create({});
