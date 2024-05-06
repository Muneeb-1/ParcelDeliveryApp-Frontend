import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from '../../components/button/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '../../../assets/colors/Colors';
import {Signup} from '../../apis/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const inputs = Array(4).fill('');
let newInputIndex = 0;
let lastInputIndex;

const isObjValid = obj => {
  return Object.values(obj).every(val => val.trim());
};
const Verification = ({navigation, route}) => {
  const {userData} = route.params;
  console.log(userData);
  const input = useRef();
  const [otp, setOTP] = useState({0: '', 1: '', 2: '', 3: ''});
  const [nextInputIndex, setNextInputIndex] = useState(0);
  const [isError, setError] = useState(false);

  const handleChangeText = (text, index) => {
    const newOTP = {...otp};
    newOTP[index] = text;
    setOTP(newOTP);

    lastInputIndex = inputs.length - 1;
    if (!text) {
      newInputIndex = index === 0 ? 0 : index - 1;
    } else {
      newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1;
    }

    setNextInputIndex(newInputIndex);
  };

  useEffect(() => {
    input.current.focus();
  }, [nextInputIndex]);

  useEffect(() => {
    Keyboard.dismiss();
  }, []);

  const submitOTP = async () => {
    Keyboard.dismiss();
    if (isObjValid(otp)) {
      let val = '';
      Object.values(otp).forEach(v => (val += v));
      if (val === userData.verificationCode) {
        await Signup(userData.email).then(async response => {
          await AsyncStorage.setItem('token', response.token);
          navigation.navigate('BottomTabNavigation');
        });
      } else {
        setError(true);
        setOTP({0: '', 1: '', 2: '', 3: ''});
      }
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
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
            <Text style={styles.title}>Verification details</Text>
            <Text style={styles.subTitle}>
              Enter the OTP sent to your email address
            </Text>
          </View>
        </View>

        {/*section 3 */}
        <View style={styles.section3}>
          <View
            style={{
              flexDirection: 'row',
              gap: 30,
              padding: 30,
            }}>
            {inputs.map((item, index) => {
              return (
                <TextInput
                  value={otp[index]}
                  key={index.toString()}
                  style={{
                    ...styles.input,
                    borderColor: isError ? 'red' : styles.input.borderColor,
                  }}
                  onChangeText={text => handleChangeText(text, index)}
                  onPress={() => setError(false)}
                  keyboardType="numeric"
                  maxLength={1}
                  ref={nextInputIndex === index ? input : null}
                />
              );
            })}
          </View>
          <View style={styles.button}>
            <Button
              text={'Verify'}
              width={wp('80%')}
              height={hp('6%')}
              borderRadius={20}
              backgroundColor={isObjValid(otp) ? Color.chocolate : ''}
              onPress={() => submitOTP()}
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Verification;

const {width} = Dimensions.get('window');
const inputWidth = Math.round(width / 7);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
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
    alignItems: 'center',
  },
  icon: {
    padding: 20,
  },
  title: {
    color: Color.black,
    fontFamily: 'Roboto-Medium',
    fontSize: hp('2.5%'),
    padding: 3,
  },
  subTitle: {
    color: Color.grey,
    fontFamily: 'Roboto-Light',
    fontSize: hp('2%'),
    padding: 3,
  },
  button: {
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderColor: Color.white,
    borderWidth: 2,
    width: inputWidth,
    height: inputWidth,
    textAlign: 'center',
    elevation: 10,
    borderRadius: 7,
    backgroundColor: Color.white,
    display: 'flex',
  },
});
