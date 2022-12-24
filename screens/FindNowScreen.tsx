import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import tw from 'twrnc';
import {getFliteredProperties} from '../functions';
import PropertiesInfinite from '../components/commons/PropertiesInfinite';
import {capitalizeFirstLetter} from '../utils';

interface PropertiesTypes {
  docs: any[];
  hasNextPage: boolean;
  nextPage: string;
  totalDocs: number;
}

const FindNowScreen = ({route}: any) => {
  /**
   * State For Loading
   */
  const [isLoading, setisLoading] = useState<boolean>(false);

  /**
   * Property Area,Status,Type To Filter From Parameters
   */
  const {area, status, type} = route.params;

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
  const getFindNowData = async (): Promise<void> => {
    setisLoading(true);
    const values = {
      area,
      status,
      type,
    };
    const propertiesData = await getFliteredProperties('1', values);
    setProperties(propertiesData);
    setisLoading(false);
  };

  /**
   * Fetch Data On Reaching End
   */
  const fetchNextData = async (): Promise<void> => {
    const values = {
      area,
      status,
      type,
    };
    const foundProperties = await getFliteredProperties(
      properties.nextPage,
      values,
    );
    setProperties({
      docs: [...properties.docs, ...foundProperties.docs],
      hasNextPage: foundProperties.hasNextPage,
      nextPage: foundProperties.nextPage,
      totalDocs: foundProperties.totalDocs,
    });
  };

  useEffect(() => {
    getFindNowData();
  }, []);

  return (
    <>
      {isLoading ? (
        <View style={tw`flex items-center justify-center h-full`}>
          <ActivityIndicator color="red" size={60} />
        </View>
      ) : (
        <>
          <PropertiesInfinite
            breadcrumb={`Search Results For (${capitalizeFirstLetter(area)})`}
            fetchNextData={fetchNextData}
            properties={properties}
          />
        </>
      )}
    </>
  );
};

export default FindNowScreen;
