import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import TextMedium from './TextMedium';
import StarRatings from './StarRatings';
import {useFormik} from 'formik';
import {AddReviewFormSchema} from '../../yupSchemas/review/AddReviewFormSchema';
import ErrorMsg from './ErrorMsg';

const AddReviewForm = () => {
  const initialValues = {
    stars: 0,
  };
  const {values, handleChange, setFieldValue, errors, touched} = useFormik({
    initialValues,
    validationSchema: AddReviewFormSchema,
    onSubmit: (values, action) => {},
  });

  /**
   * Handle When Star Changes
   */
  const onStarChange = (stars: number) => {
    setFieldValue('stars', stars);
  };

  return (
    <View style={tw`bg-slate-100 rounded-md p-7`}>
      <TextMedium text="Add A Review" />
      <View style={tw`flex flex-row items-center mt-5 mb-2.5`}>
        <Text
          adjustsFontSizeToFit
          style={[tw`text-base mt-1 text-black`, styles.poppinsMedium]}>
          Your Ratings:
        </Text>
        <View style={tw`mt-1 mx-4`}>
          <StarRatings
            rating={values.stars}
            onChange={(stars: number) => onStarChange(stars)}
          />
        </View>
      </View>
      {touched.stars && errors.stars && <ErrorMsg error={errors.stars} />}
    </View>
  );
};

export default AddReviewForm;

const styles = StyleSheet.create({
  poppinsMedium: {
    fontFamily: 'Poppins-Medium',
  },
});
