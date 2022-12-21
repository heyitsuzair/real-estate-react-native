import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import ListingsCard from './ListingsCard';
import tw from 'twrnc';
import {ActivityIndicator} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import Footer from './Footer';
import PreFooter from './PreFooter';

const PropertiesInfinite = ({fetchNextData, properties}: any) => {
  return (
    <FlatList
      data={properties.docs}
      onEndReached={() => {
        if (properties.hasNextPage) {
          fetchNextData();
        }
      }}
      onEndReachedThreshold={0.3}
      ListEmptyComponent={
        <View style={tw`flex items-center justify-center`}>
          <Text adjustsFontSizeToFit style={[styles.notFound, tw`text-sm`]}>
            Sorry! We Cannot Find What You Are Looking For
          </Text>
        </View>
      }
      showsVerticalScrollIndicator={false}
      ListFooterComponent={
        properties.hasNextPage ? (
          <View style={tw`mt-2 mb-12`}>
            <ActivityIndicator color="red" size={35} />
          </View>
        ) : (
          properties.docs &&
          properties.docs.length > 0 && (
            <>
              <View
                style={tw`flex flex-row justify-center mt-2 mb-12 items-center`}>
                <View
                  style={tw`mx-2 -ml-2 border-2 border-red-500 p-2 rounded-full`}>
                  <Icon name="check" color="red" size={25} />
                </View>
                <Text
                  adjustsFontSizeToFit
                  style={[
                    tw`text-center text-lg text-black mt-1`,
                    styles.poppinsSemiBold,
                  ]}>
                  You're All Caught Up
                </Text>
              </View>
              <PreFooter />
              <Footer />
            </>
          )
        )
      }
      renderItem={(property: any) => (
        <View style={tw`p-5`}>
          <ListingsCard key={property.item._id} property={property.item} />
        </View>
      )}
    />
  );
};

export default PropertiesInfinite;

const styles = StyleSheet.create({
  notFound: {
    fontFamily: 'Poppins-SemiBold',
  },
  poppinsSemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
});
