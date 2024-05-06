import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from '../../components/button/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../../../assets/colors/Colors';
import {verifyEmail} from '../../apis/auth';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleOnPress = async () => {
    if (email) {
      Keyboard.dismiss();
      await verifyEmail(email).then(response => {
        navigation.navigate('Verification', {userData: response});
      });
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        networkActivityIndicatorVisible={true}
        barStyle={'light-content'}
        backgroundColor={Color.chocolate}
      />
      <SafeAreaView style={{flex: 1}}>
        {/*section 1 */}
        <View style={styles.section1}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" color="#333" size={25} />
          </TouchableOpacity>
        </View>

        {/*section 2 */}
        <View style={styles.section2}>
          <View style={{padding: 20}}>
            <Text style={styles.title}>Enter your email address</Text>
            <Text style={styles.subTitle}>
              Create an account with your email address
            </Text>
          </View>
        </View>

        {/*section 3 */}
        <View style={styles.section3}>
          <View style={{padding: 20}}>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholderTextColor={Color.darkgray}
              placeholder="Email Address"
              onChangeText={text => setEmail(text)}></TextInput>
          </View>
          <View style={styles.button}>
            <Button
              text={'Continue'}
              width={wp('80%')}
              height={hp('6%')}
              borderRadius={20}
              backgroundColor={email ? '#d2691e' : ''}
              onPress={() => handleOnPress()}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section1: {
    flex: 1,
    justifyContent: 'center',
  },
  section2: {
    flex: 2,
    justifyContent: 'center',
  },
  section3: {
    flex: 10,
    justifyContent: 'space-between',
  },
  icon: {
    padding: 20,
  },
  title: {
    color: '#333',
    fontFamily: 'Roboto-Medium',
    fontSize: hp('2.5%'),
    padding: 3,
  },
  subTitle: {
    color: Color.darkgray,
    fontFamily: 'Roboto-Light',
    fontSize: hp('2%'),
    padding: 3,
  },
  button: {
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderColor: Color.grey,
    borderBottomWidth: 1,
    width: wp('80%'),
    caretColor: '#333',
    color: Color.black,
  },
  inputTitle: {
    color: Color.grey,
    fontSize: hp('2.5%'),
  },
});
