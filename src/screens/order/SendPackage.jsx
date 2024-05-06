import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/header/Header';
import {Color} from '../../../assets/colors/Colors';

const SendPackage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header
          title={'Select Package Type'}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.cardContainer}>
          <View style={{alignItems: 'center', gap: 10}}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('OrderForm')}>
              <Image
                source={require('../../../assets/images/document.png')}
                style={styles.img}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Document</Text>
          </View>

          <View style={{alignItems: 'center', gap: 10}}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('OrderForm')}>
              <Image
                source={require('../../../assets/images/parcel.png')}
                style={styles.img}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Parcel</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SendPackage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: 'row',
    padding: 23,
    gap: 20,
    flexWrap: 'wrap',
  },
  card: {
    width: wp('40%'),
    height: hp('30%'),
    backgroundColor: Color.lightgray,
    borderColor: Color.silver,
    borderWidth: 2,
    borderRadius: 10,
    elevation: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: hp('2.5%'),
    fontWeight: '400',
    color: Color.black,
  },
  img: {
    resizeMode: 'contain',
    width: '80%',
    height: '80%',
  },
});
