import {PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch} from 'react-redux';
import {ADD_LOCATION} from '../services/redux/constants/Constant';

export const requestLocation = async ({dispatch}) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'App needs access to your location.',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        position => {
            dispatch({type: ADD_LOCATION, payload: position.coords});
          console.log(position.coords);
        },
        error => {
          console.log(error);
        },
        {enableHighAccuracy: true, timeout: 100000, maximumAge: 1000},
      );
    } else {
      alert('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
