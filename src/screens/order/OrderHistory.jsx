import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useExitOnBack from '../../components/backHandler/Backhandler';

const OrderHistory = () => {
  useExitOnBack(false)
  return (
    <View>
      <Text>OrderHistory</Text>
    </View>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({});
