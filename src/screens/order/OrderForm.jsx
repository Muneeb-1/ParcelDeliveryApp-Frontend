import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/header/Header';
import Input from '../../components/textinput/TextInput';
import {Color} from '../../../assets/colors/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/button/Button';

const OrderForm = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Enter Package Size and Weight'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentContainer}>
          <Input
            borderColor={Color.black}
            borderWidth={1}
            title={'Height'}
            txtColor={Color.chocolate}
            placeholder={'Please Enter Package Height in cm'}
            placeholderTextColor={Color.grey}
          />
          <Input
            borderColor={Color.black}
            borderWidth={1}
            title={'Width'}
            txtColor={Color.chocolate}
            placeholder={'Please Enter Package Width in cm'}
            placeholderTextColor={Color.grey}
          />
          <Input
            borderColor={Color.black}
            borderWidth={1}
            title={'Depth'}
            txtColor={Color.chocolate}
            placeholder={'Please Enter Package Depth in cm'}
            placeholderTextColor={Color.grey}
          />
          <Input
            borderColor={Color.black}
            borderWidth={1}
            title={'Weight'}
            txtColor={Color.chocolate}
            placeholder={'Please Enter Package Weight in kg'}
            placeholderTextColor={Color.grey}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            text={'Back'}
            textColor={Color.black}
            width={wp('40%')}
            height={hp('6%')}
            borderWidth={1}
            backgroundColor={Color.lightgray}
            borderRadius={20}
            onPress={() => navigation.goBack()}
          />
          <Button
            text={'Continue'}
            textColor={Color.black}
            width={wp('40%')}
            height={hp('6%')}
            backgroundColor={Color.chocolate}
            borderRadius={20}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding:10,
    alignItems:'center'
  },
  contentContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  buttonView: {
    flexDirection: 'row',
    gap: 10,
  },
});
