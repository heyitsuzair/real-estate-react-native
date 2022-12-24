import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Navigation from './navigation';
import tw from 'twrnc';
import SplashScreen from 'react-native-splash-screen'; //import SplashScreen

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <StatusBar backgroundColor={'red'} />
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
