import {StyleSheet, View} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';

const styles = StyleSheet.create({
  map: {
    height: 400,
    width: 370,
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
        style={styles.map}
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
