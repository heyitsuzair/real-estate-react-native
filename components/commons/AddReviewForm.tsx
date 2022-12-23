import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import TextMedium from './TextMedium';
import StarRatings from './StarRatings';
import {useFormik} from 'formik';
import {AddReviewFormSchema} from '../../yupSchemas/review/AddReviewFormSchema';
import ErrorMsg from './ErrorMsg';
import TextAreaValidated from './TextAreaValidated';
import TextInputValidated from './TextInputValidated';
import ButtonRed from './ButtonRed';
import {submitReview} from '../../functions';
import {ActivityIndicator} from 'react-native-paper';
import {showMessage} from 'react-native-flash-message';

interface PropTypes {
  setIsCommentAdded: any;
  property_id: string;
}

const AddReviewForm = ({property_id, setIsCommentAdded}: PropTypes) => {
  /**
   * State To Show Loader When Form Is Submitted
   */
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues = {
    stars: 0,
    msg: '',
    name: '',
    email: '',
    website: '',
  };
  const {values, handleChange, setFieldValue, errors, touched, handleSubmit} =
    useFormik({
      initialValues,
      validationSchema: AddReviewFormSchema,
      onSubmit: async (values, action) => {
        setIsLoading(true);

        const reviewAdded = await submitReview(values, property_id);

        /**
         * If API Returns Any Error, Show It In Toast Else Show Success Message In Toast
         */
        if (reviewAdded.error) {
          setIsLoading(false);
          return;
        }
        /**
         * Set Is Comment Added To True So Component Will Remount And Will Fetch New Ratings
         */
        if (typeof setIsCommentAdded !== 'undefined') {
          setIsCommentAdded(true);
        }
        setIsLoading(false);

        showMessage({
          message: reviewAdded.msg,
          type: 'success',
        });

        action.resetForm();
      },
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
      <View style={tw`my-4`}>
        <TextAreaValidated
          onChangeText={handleChange('msg')}
          value={values.msg}
          error={errors.msg && touched.msg}
          errorText={errors.msg}
          label="Message"
        />
      </View>
      <View style={tw`my-1`}>
        <TextInputValidated
          onChangeText={handleChange('name')}
          value={values.name}
          error={errors.name && touched.name}
          errorText={errors.name}
          label="Name"
        />
      </View>
      <View style={tw`my-1`}>
        <TextInputValidated
          onChangeText={handleChange('email')}
          value={values.email}
          error={errors.email && touched.email}
          errorText={errors.email}
          label="Email"
        />
      </View>
      <View style={tw`my-1`}>
        <TextInputValidated
          onChangeText={handleChange('website')}
          value={values.website}
          error={errors.website && touched.website}
          errorText={errors.website}
          label="Website"
        />
      </View>
      {isLoading ? (
        <View style={tw`my-5 flex items-start`}>
          <ActivityIndicator color="red" size={35} />
        </View>
      ) : (
        <View style={tw`my-5 flex items-start`}>
          <ButtonRed text="Submit" onPress={handleSubmit} />
        </View>
      )}
    </View>
  );
};

export default AddReviewForm;

const styles = StyleSheet.create({
  poppinsMedium: {
    fontFamily: 'Poppins-Medium',
  },
});
