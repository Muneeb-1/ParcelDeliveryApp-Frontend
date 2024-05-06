import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../../../assets/colors/Colors';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = ({title, height, onPress, fontSize}) => {
  return (
    <View
      style={{
        height: height ? height : hp('6%'),
        flexDirection: 'row',
        padding: 10,
        gap: 10,
      }}>
      <TouchableOpacity style={{alignSelf: 'center'}} onPress={onPress}>
        <Icon name="left" color={Color.black} size={22} />
      </TouchableOpacity>
      <Text
        style={{
          color: Color.black,
          alignSelf: 'center',
          fontSize: fontSize ? fontSize : hp('2%'),
          fontWeight: '400',
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
