import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../../../assets/colors/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {verifyToken} from '../../apis/auth';
import CheckInternet from '../../models/CheckInternet';

const Splash = ({navigation}) => {
  const [isConnected, setIsConnected] = useState(true);
  // setTimeout(() => {
  //   navigation.navigate('Welcome');
  // }, 2000);

  useEffect(() => {
    const handleToken = async () => {
      const token = await AsyncStorage.getItem('token');

      // Check if token exists
      if (token) {
        verifyToken(token)
          .then(response => {
            if (response?.validToken == true) {
              navigation.navigate('BottomTabNavigation');
            } else if (response?.validToken == false) {
              navigation.navigate('Signup');
            }
          })
          .catch(error => {
            console.error('Error verifying token:', error);
            navigation.navigate('Signup');
          });
      } else {
        navigation.navigate('Welcome');
      }
    };
    setTimeout(() => {
      if (isConnected) {
        handleToken();
      }
    }, 2000);
  }, [isConnected]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <Text style={styles.txt}>CourierPro</Text>
      <CheckInternet
        isConnected={isConnected}
        setIsConnected={setIsConnected}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.midnightblue,
  },
  txt: {
    color: Color.chocolate,
    fontSize: hp('5%'),
    fontFamily: 'Fuzzy Bubbles Regular',
  },
});
