import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import TextInputDebounced from '../components/commons/TextInputDebounced';
import tw from 'twrnc';
import {findProperties} from '../functions';

const SearchScreen = () => {
  /**
   * State For Loading
   */
  const [isLoading, setisLoading] = useState<boolean>(false);

  /**
   * State To Store Search Input Value
   */
  const [query, setQuery] = useState<string>('');

  /**
   * Search For Properties
   */
  const handleChangeSearch = async (text: string): Promise<void> => {
    /**
     * Check If Value Of Input Is Empty Than Return Instead Of Calling API
     */
    if (!text) {
      setQuery(text);
      return;
    }
    setQuery(text);
    setisLoading(true);
    const foundProperties = await findProperties('1', text);
    console.log(foundProperties);
    setisLoading(false);
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
          <Text style={[styles.notTouched, tw`text-xl`]}>Loaded</Text>
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
