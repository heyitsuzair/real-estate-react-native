import {Pressable, ScrollView, StyleSheet} from 'react-native';
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
      style={tw`bg-gray-100 rounded-lg p-1`}>
      {tabs.map((tab: string, index: number) => {
        const isActive = activeTab === index ? 'bg-white' : '';
        const isSingle = tabs.length === 1 ? 'w-84 px-0' : 'w-60';
        const isLast = tabs.length - 1 === index ? 'mr-2' : '';
        return (
          <Pressable
            key={index}
            onPress={() => onPressTab(index)}
            style={tw`rounded-lg ${isSingle} ${isActive} ${isLast} py-1.5`}>
            <Text
              adjustsFontSizeToFit
              style={[tw`text-center text-base`, styles.title]}>
              {tab}
            </Text>
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
