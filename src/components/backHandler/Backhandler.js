import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';

const useExitOnBack = exit => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (exit == false) {
          navigation.goBack();
          return true;
        } else if (exit == true) {
          BackHandler.exitApp();
          return true;
        }
        return false;
      },
    );

    return () => backHandler.remove();
  }, [navigation]);
};

export default useExitOnBack;
