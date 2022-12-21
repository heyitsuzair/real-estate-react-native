import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import tw from 'twrnc';
import {fetchProperties} from '../functions';
import PropertiesInfinite from '../components/commons/PropertiesInfinite';

interface PropertiesTypes {
  docs: any[];
  hasNextPage: boolean;
  nextPage: string;
  totalDocs: number;
}

const ShopScreen = () => {
  /**
   * State For Loading
   */
  const [isLoading, setisLoading] = useState<boolean>(false);

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
   * Search For Properties
   */
  const getShopData = async (): Promise<void> => {
    setisLoading(true);
    const propertiesData = await fetchProperties('1');
    setProperties(propertiesData);
    setisLoading(false);
  };

  /**
   * Fetch Data On Reaching End
   */
  const fetchNextData = async (): Promise<void> => {
    const foundProperties = await fetchProperties(properties.nextPage);
    setProperties({
      docs: [...properties.docs, ...foundProperties.docs],
      hasNextPage: foundProperties.hasNextPage,
      nextPage: foundProperties.nextPage,
      totalDocs: foundProperties.totalDocs,
    });
  };

  useEffect(() => {
    getShopData();
  }, []);

  return (
    <>
      {isLoading ? (
        <View style={tw`flex items-center justify-center h-full`}>
          <ActivityIndicator color="red" size={60} />
        </View>
      ) : (
        <PropertiesInfinite
          fetchNextData={fetchNextData}
          properties={properties}
        />
      )}
    </>
  );
};

export default ShopScreen;
