import {Pressable, ScrollView, StyleSheet} from 'react-native';
import {View} from 'react-native-animatable';
import {Text} from 'react-native-paper';
import tw from 'twrnc';
import React from 'react';

interface PropTypes {
  tabs: string[];
  activeTab: number;
  setActiveTab: (obj: number) => void;
}

const Tabs = ({tabs, activeTab, setActiveTab}: PropTypes) => {
  /**
   * Set The Index To "activeTab State" On Tab Press
   */
  const onPressTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={tw`bg-gray-100 rounded-lg p-1.3`}>
      {tabs.map((tab: string, index: number) => {
        const isActive = activeTab === index;
        return (
          <Pressable
            key={index}
            onPress={() => onPressTab(index)}
            style={tw`rounded-lg px-20 ${tabs.length === 1 && 'w-84.5 px-0'}  ${
              isActive && 'bg-white'
            } ${tabs.length - 1 === index && 'mr-2'} py-2`}>
            <Text style={[tw`text-center text-base`, styles.title]}>{tab}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Medium',
  },
});

export default Tabs;
