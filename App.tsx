import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Navigation from './navigation/Navigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'red'} />
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
