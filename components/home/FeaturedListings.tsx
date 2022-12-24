import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import Badge from '../commons/Badge';
import TextSemiLarge from '../commons/TextSemiLarge';
import {fetchProperties} from '../../functions';
import PropertyCarousel from '../commons/PropertyCarousel';

const FeaturedListings = () => {
  const [properties, setProperties] = useState<any[]>([]);

  /**
   * Fetch Properties Of First Page Pagination
   */
  const getProperties = async () => {
    const propertiesData = await fetchProperties('1');
    setProperties(propertiesData.docs);
  };

  useEffect(() => {
    getProperties();
    //eslint-disable-next-line
  }, []);

  return (
    <View style={tw`bg-slate-200 py-20 px-5 items-center`}>
      <Badge text="Properties" />
      <View style={tw`my-8`}>
        <TextSemiLarge align="center" text="Featured Listings" />
      </View>
      <PropertyCarousel properties={properties} />
    </View>
  );
};

export default FeaturedListings;
