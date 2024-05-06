import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/button/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../../../assets/colors/Colors';
import {cardData} from '../../data/cardViewData';
import CardView from '../../components/card/CardView';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />

      <View style={styles.section1}>
        <Text style={styles.txt}>CourierPro</Text>
      </View>
      <View style={styles.section2}>
        {cardData?.map(item => (
          <View key={item.id}>
            <CardView
              name={item.name}
              img={item.image}
              description={item.description}
              width={wp('90%')}
              gap={15}
              minHeight={hp('13%')}
              borderRadius={wp('3%')}
              elevation={0}
            />
          </View>
        ))}
      </View>
      <View style={styles.section3}>
        <Button
          text={'Get Started'}
          onPress={() => navigation.navigate('Signup')}
          backgroundColor={'#d2691e'}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.midnightblue,
  },
  txt: {
    color: Color.chocolate,
    fontSize: hp('4%'),
    fontFamily: 'Fuzzy Bubbles Regular',
  },
  section1: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section2: {
    flex: 5,
    justifyContent: 'center',
    gap: 10,
    padding: 30,
  },
  section3: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerView: {},
  innerText: {
    fontSize: hp('3%'),
    fontFamily: 'Play-Regular',
    color: Color.white,
  },
  innerSubText: {
    fontSize: 15,
    color: Color.darkgray,
    maxWidth: '90%',
    textAlign: 'left',
  },
  image: {
    backgroundColor: Color.white,
    width: wp('19%'),
    height: hp('9%'),
    borderRadius: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
