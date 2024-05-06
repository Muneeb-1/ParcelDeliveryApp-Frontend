import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../../../assets/colors/Colors';

const CardView = ({
  img,
  name,
  description,
  borderColor,
  borderWidth,
  width,
  height,
  elevation,
  gap,
  minHeight,
  borderRadius,
  textNameColor,
  backgroundColor,
  imageBackground,
  onPress,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderColor: borderColor ? borderColor : null,
        borderWidth: borderWidth ? borderWidth : 0,
        elevation: elevation ? elevation : 0,
        width: width ? width : 0,
        gap: gap ? gap : 0,
        minHeight: minHeight ? minHeight : 0,
        borderRadius: borderRadius ? borderRadius : 0,
        backgroundColor: backgroundColor ? backgroundColor : null,
      }}
      >
      <View
        style={{
          backgroundColor: imageBackground ? imageBackground : Color.white,
          width: wp('19%'),
          height: hp('9%'),
          borderRadius: wp('10%'),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={img}
          style={{
            resizeMode: 'contain',
            width: wp('16%'),
            height: hp('6%'),
          }}
        />
      </View>
      <View style={{flexWrap: 'wrap'}}>
        <Text
          style={{
            fontSize: hp('3%'),
            fontFamily: 'Play-Regular',
            color: textNameColor ? textNameColor : Color.white,
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: Color.darkgray,
            maxWidth: '85%',
            textAlign: 'left',
          }}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
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
