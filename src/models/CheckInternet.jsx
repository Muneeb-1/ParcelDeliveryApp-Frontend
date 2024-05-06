import {Modal, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color} from '../../assets/colors/Colors';
import {addEventListener} from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CheckInternet = ({isConnected, setIsConnected, onClose}) => {
  const [netInfo, setNetInfo] = useState(null);

  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      setNetInfo(state.details);
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe;
  }, []);
  return (
    <Modal animationType="fade" visible={!isConnected} onRequestClose={onClose}>
      <View style={styles.container}>
        <Icon
          name="signal-wifi-connected-no-internet-4"
          size={50}
          color={Color.black}
        />
        <Text>No Internet Connection...</Text>
      </View>
    </Modal>
  );
};

export default CheckInternet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
