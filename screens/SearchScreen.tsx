import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import TextInputDebounced from '../components/commons/TextInputDebounced';
import tw from 'twrnc';
import {findProperties} from '../functions';
import ListingsCard from '../components/commons/ListingsCard';
import PropertiesInfinite from '../components/commons/PropertiesInfinite';

interface PropertiesTypes {
  docs: any[];
  hasNextPage: boolean;
  nextPage: string;
  totalDocs: number;
}

const SearchScreen = () => {
  /**
   * State For Loading
   */
  const [isLoading, setisLoading] = useState<boolean>(false);
  /**
   * State For On End Reach Loading
   */
  const [isLoadingOnEnd, setisLoadingOnEnd] = useState<boolean>(true);
  /**
   * State To Store Found Properties
   */
  const [properties, setProperties] = useState<PropertiesTypes>({
    docs: [],
    hasNextPage: false,
    nextPage: '',
    totalDocs: 0,
  });

  /**
   * State To Store Search Input Value
   */
  const [query, setQuery] = useState<string>('');

  /**
   * Search For Properties
   */
  const handleChangeSearch = async (text: string): Promise<void> => {
    setQuery(text);
    setisLoading(true);
    const foundProperties = await findProperties('1', text);
    setProperties(foundProperties);
    setisLoading(false);
  };

  /**
   * Fetch Data On Reaching End
   */
  const fetchNextData = async (): Promise<void> => {
    setisLoadingOnEnd(true);
    const foundProperties = await findProperties(properties.nextPage, query);
    setProperties({
      docs: [...properties.docs, ...foundProperties.docs],
      hasNextPage: foundProperties.hasNextPage,
      nextPage: foundProperties.nextPage,
      totalDocs: foundProperties.totalDocs,
    });
    setisLoadingOnEnd(false);
  };

  return (
    <>
      <TextInputDebounced
        placeholder="Search Your Query"
        value={query}
        onChangeText={handleChangeSearch}
      />
      {query ? (
        isLoading ? (
          <View style={tw`flex items-center justify-center h-full`}>
            <ActivityIndicator color="red" size={60} />
          </View>
        ) : (
          <PropertiesInfinite
            fetchNextData={fetchNextData}
            properties={properties}
            isLoadingOnEnd={isLoadingOnEnd}
          />
        )
      ) : (
        <View style={tw`flex items-center justify-center h-full`}>
          <Text adjustsFontSizeToFit style={[styles.notTouched, tw`text-xl`]}>
            Please Type Something To Search
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  notTouched: {
    fontFamily: 'Poppins-SemiBold',
  },
});

export default SearchScreen;
