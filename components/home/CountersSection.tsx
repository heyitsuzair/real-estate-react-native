import {View} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import Counter from '../commons/Counter';
import {InView} from 'react-native-intersection-observer';

const CountersSection = () => {
  const [isCounting, setIsCounting] = useState<boolean>(false);

  return (
    <InView onChange={inView => setIsCounting(inView)}>
      <View style={tw`bg-slate-200 py-20 px-5`}>
        <View style={tw`flex-row justify-between`}>
          <Counter
            isCounting={isCounting}
            icon="google-spreadsheet"
            end={560}
            text="Total Area Sq"
          />
          <Counter
            isCounting={isCounting}
            icon="office-building"
            end={983}
            text="Apartments Sold"
          />
        </View>
        <View style={tw`flex-row justify-between mt-4`}>
          <Counter
            isCounting={isCounting}
            icon="truck"
            end={268}
            text="Total Constructions"
          />
          <Counter
            isCounting={isCounting}
            icon="chair-rolling"
            end={340}
            text="Apartio Rooms"
          />
        </View>
      </View>
    </InView>
  );
};

export default CountersSection;
