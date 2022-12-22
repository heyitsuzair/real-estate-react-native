import {View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import IconWithTitleDescription from '../commons/IconWithTitleDescription';

const FactsAndFeatures = () => {
  return (
    <View style={tw`pb-10 pt-3`}>
      <View style={tw`my-5`}>
        <IconWithTitleDescription
          title="Living Room"
          description="Available"
          icon="home"
        />
      </View>
      <View style={tw`my-5`}>
        <IconWithTitleDescription
          title="Garage"
          description="Available"
          icon="car"
        />
      </View>
      <View style={tw`my-5`}>
        <IconWithTitleDescription
          title="Dinning Area"
          description="Available"
          icon="silverware-spoon"
        />
      </View>
      <View style={tw`my-5`}>
        <IconWithTitleDescription
          title="Bed Room"
          description="Available"
          icon="bed"
        />
      </View>
      <View style={tw`my-5`}>
        <IconWithTitleDescription
          title="Bath Room"
          description="Available"
          icon="bathtub"
        />
      </View>
      <View style={tw`my-5`}>
        <IconWithTitleDescription
          title="Gym Area"
          description="Available"
          icon="dumbbell"
        />
      </View>
      <View style={tw`my-5`}>
        <IconWithTitleDescription
          title="Garden"
          description="Available"
          icon="flower-tulip"
        />
      </View>
      <View style={tw`my-5`}>
        <IconWithTitleDescription
          title="Parking"
          description="Available"
          icon="parking"
        />
      </View>
    </View>
  );
};

export default FactsAndFeatures;
