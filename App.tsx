import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Navigation from './navigation/Navigation';
import tw from 'twrnc';

const App = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <StatusBar backgroundColor={'red'} />
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
