import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../../../assets/colors/Colors';

const Input = ({
  title,
  borderWidth,
  borderColor,
  width,
  height,
  txtColor,
  txtSize,
  marginTop,
  placeholder,
  placeholderTextColor,
  fontWeight,
  borderRadius,
}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        padding: 5,
        marginTop: marginTop ? marginTop : hp('3%'),
      }}>
      <Text
        style={{
          color: txtColor ? txtColor : Color.black,
          fontSize: txtSize ? txtSize : hp('2%'),
          fontWeight: fontWeight ? fontWeight : '600',
        }}>
        {title}
      </Text>
      <TextInput
        style={{
          borderWidth: borderWidth ? borderWidth : 0,
          borderColor: borderColor ? borderColor : null,
          width: width ? width : wp('85%'),
          height: height ? height : hp('6%'),
          marginTop: marginTop ? marginTop : hp('2%'),
          paddingHorizontal: 10,
          borderRadius: borderRadius ? borderRadius : 10,
        }}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
