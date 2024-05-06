import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../../../assets/colors/Colors';

const Button = ({
  width,
  height,
  backgroundColor,
  elevation,
  text,
  textColor,
  borderRadius,
  fontFamily,
  onPress,
  enable,
  borderWidth,
  txtSize,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: width ? width : wp('80%'),
        height: height ? height : hp('6%'),
        backgroundColor: backgroundColor ? backgroundColor : Color.grey,
        elevation: elevation ? elevation : 10,
        borderRadius: borderRadius ? borderRadius : 10,
        borderWidth: borderWidth ? borderWidth : 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <Text
        style={{
          color: textColor ? textColor : Color.white,
          fontFamily: fontFamily ? fontFamily : 'Play-Bold',
          fontSize: txtSize ? txtSize : hp('2%'),
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
