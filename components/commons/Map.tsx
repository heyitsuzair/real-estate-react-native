import {StyleSheet, View} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import tw from 'twrnc';

const styles = StyleSheet.create({
  map: {
    height: 400,
  },
});

interface PropTypes {
  lat: number;
  lng: number;
  title: string;
  description: string;
}

const Map = ({lat, lng, title, description}: PropTypes) => {
  return (
    <View>
      <MapView
        style={[styles.map, tw`w-85`]}
        zoomEnabled
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.0121,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: lat,
            longitude: lng,
          }}
          title={title}
          description={description}
        />
      </MapView>
    </View>
  );
};

export default Map;
