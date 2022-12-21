import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import ListingsCard from './ListingsCard';
import tw from 'twrnc';

const PropertiesInfinite = ({
  fetchNextData,
  properties,
  isLoadingOnEnd,
}: any) => {
  return properties.totalDocs > 0 ? (
    <>
      <FlatList
        data={properties.docs}
        onEndReached={() => {
          if (properties.hasNextPage) {
            fetchNextData();
          }
        }}
        onEndReachedThreshold={0.3}
        style={tw`p-5`}
        showsVerticalScrollIndicator={false}
        renderItem={(property: any) => (
          <>
            <ListingsCard
              isLoadingOnEnd={isLoadingOnEnd}
              key={property.item._id}
              index={property.index}
              totalDocs={properties.docs.length}
              property={property.item}
              hasNextPage={properties.hasNextPage}
            />
          </>
        )}
      />
    </>
  ) : (
    <View style={tw`flex items-center justify-center h-full`}>
      {/* <Icon */}
      <Text adjustsFontSizeToFit style={[styles.notFound, tw`text-sm`]}>
        Sorry! We Cannot Find What You Are Looking For
      </Text>
    </View>
  );
};

export default PropertiesInfinite;

const styles = StyleSheet.create({
  notFound: {
    fontFamily: 'Poppins-SemiBold',
  },
});
