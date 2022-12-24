import {View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Counter from '../commons/Counter';

const CountersSection = () => {
  return (
    <View style={tw`bg-slate-200 py-20 px-5`}>
      <View style={tw`flex-row justify-between`}>
        <Counter icon="google-spreadsheet" end={560} text="Total Area Sq" />
        <Counter icon="office-building" end={983} text="Apartments Sold" />
      </View>
      <View style={tw`flex-row justify-between mt-4`}>
        <Counter icon="truck" end={268} text="Total Constructions" />
        <Counter icon="chair-rolling" end={340} text="Apartio Rooms" />
      </View>
    </View>
  );
};

export default CountersSection;
