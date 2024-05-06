import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Geocoder from 'react-native-geocoding';
import {Color} from '../../../assets/colors/Colors';
import Icon from 'react-native-vector-icons/Entypo';

const MapScreen = () => {
  const {location} = useSelector(state => state.LocationReducer);
  console.log(location)

  const [locationName, setLocationName] = useState(null);

  // useEffect(() => {
  //   if (location) {
  //     const {latitude, longitude} = location;
  //     Geocoder.init(process.env.GOOGLE_API_KEY);
  //     Geocoder.from(latitude, longitude)
  //       .then(json => {
  //         const address = json.results[0].formatted_address;
  //         setLocationName(address);
  //       })
  //       .catch(error => console.error(error));
  //   }
  // }, [location]);

  const handlePress = async e => {
    // const {latitude, longitude} = e.nativeEvent.coordinate;
    // console.log(
    //   `Pressed Location - Latitude: ${latitude}, Longitude: ${longitude}`,
    // );
  };

  return (
    <View style={styles.container}>
      {location && (
        <>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: location ? location.latitude : 37.78825,
              longitude: location ? location.longitude : -122.4324,
              latitudeDelta: 0.9,
              longitudeDelta: 1.8,
            }}>
            <Marker
              coordinate={{
                latitude: location ? location.latitude : 37.78825,
                longitude: location ? location.longitude : -122.4324,
              }}
              title="You are here"
              description="Your current location"
            />
          </MapView>
          <View style={styles.currentLocation}>
            <Icon name="location-pin" color={'green'} size={25} />
            <Text style={styles.currentLocationText}>Shamsabad/Rawalpindi</Text>
          </View>
          <TouchableOpacity style={styles.locationContainer}>
            <Text style={styles.locationText}>Done</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
  currentLocation: {
    position: 'absolute',
    flexDirection: 'row',
    gap:5,
    top: 50,
    left: 40,
    right: 40,
    backgroundColor: Color.white,
    borderRadius: 10,
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  locationContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: Color.chocolate,
    borderRadius: 10,
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  locationText: {
    fontSize: hp('3.5%'),
    color: Color.white,
    fontWeight: '800',
  },
  currentLocationText: {
    fontSize: hp('2.5%'),
    color: Color.black,
    fontWeight: '500',
  },
});

export default MapScreen;
