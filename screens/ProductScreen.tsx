import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PreFooter from '../components/commons/PreFooter';
import Footer from '../components/commons/Footer';

const ProductScreen = ({route}: any) => {
  /**
   * Product Id From Parameters
   */
  const {id} = route.params;

  return (
    <View>
      <Text>ProductScreen</Text>
      <PreFooter />
      <Footer />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
