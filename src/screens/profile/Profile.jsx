import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import useExitOnBack from '../../components/backHandler/Backhandler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/header/Header';

const Profile = ({navigation}) => {
  useExitOnBack(false);
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.section1}>

      </View>
      <View style={styles.section2}>

      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section1:{

  },
  section2:{
    
  }
});
