import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const PropertyChart = () => {
  return (
    <View style={tw`bg-slate-100 p-8 rounded-md shadow-md`}>
      <View style={tw`flex flex-row`}>
        <View>
          <Text style={[tw`text-gray-500 mb-5.2`]}>Home Area:</Text>
          <Text style={[tw`text-gray-500 mb-5.2`]}>Baths:</Text>
          <Text style={[tw`text-gray-500 mb-5.2`]}>Bed Rooms:</Text>
          <Text style={[tw`text-gray-500 mb-5.2`]}>Year Built:</Text>
          <Text style={[tw`text-gray-500 mb-5.2`]}>Lot Size:</Text>
          <Text style={[tw`text-gray-500 mb-5.2`]}>Garages:</Text>
          <Text style={[tw`text-gray-500 mb-5.2`]}>Garages Size:</Text>
          <Text style={[tw`text-gray-500 mb-5.2`]}>Property Status:</Text>
        </View>
        <View>
          <Text style={[tw`text-black mb-4.05 mx-6`, styles.value]}>
            Home Area:
          </Text>
          <Text style={[tw`text-black mb-4.05 mx-6`, styles.value]}>
            Baths:
          </Text>
          <Text style={[tw`text-black mb-4.05 mx-6`, styles.value]}>
            Bed Rooms:
          </Text>
          <Text style={[tw`text-black mb-4.05 mx-6`, styles.value]}>
            Year Built:
          </Text>
          <Text style={[tw`text-black mb-4.05 mx-6`, styles.value]}>
            Lot Size:
          </Text>
          <Text style={[tw`text-black mb-4.05 mx-6`, styles.value]}>
            Garages:
          </Text>
          <Text style={[tw`text-black mb-4.05 mx-6`, styles.value]}>
            Garages Size:
          </Text>
          <Text style={[tw`text-black mb-3 mx-6`, styles.value]}>
            Property Status:
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PropertyChart;

const styles = StyleSheet.create({
  value: {
    fontFamily: 'Poppins-SemiBold',
  },
});
