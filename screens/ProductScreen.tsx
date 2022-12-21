import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductScreen = ({route}: any) => {
  /**
   * Product Id From Parameters
   */
  const {id} = route.params;

  return (
    <View>
      <Text>ProductScreen</Text>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
