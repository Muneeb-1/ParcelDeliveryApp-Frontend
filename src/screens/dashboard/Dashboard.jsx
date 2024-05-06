import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color} from '../../../assets/colors/Colors';
import {cardData} from '../../data/cardViewData';
import CardView from '../../components/card/CardView';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CheckInternet from '../../models/CheckInternet';
import {requestLocation} from '../../apis/location';
import { useDispatch } from 'react-redux';

const Dashboard = ({navigation}) => {
  const [isConnected, setIsConnected] = useState(true);
  const dispatch=useDispatch()

  useEffect(() => {
    requestLocation(dispatch);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={Color.chocolate} />
      <View style={styles.section1}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Map')}>
          <View style={{alignSelf: 'center', gap: 3}}>
            <Text style={styles.locationText}>Shamsabad/Rawalpindi</Text>
            <Text style={styles.locationSubText}>change the city</Text>
          </View>

          <Image
            source={require('../../../assets/images/gps.png')}
            style={styles.img}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.section2}>
        <Text style={styles.heading}>Select Delivery</Text>
        <ScrollView contentContainerStyle={{gap: 20}}>
          {cardData?.map(item => (
            <TouchableOpacity
              key={item.id}
              style={{alignSelf: 'center'}}
              onPress={() => navigation.navigate('Send Packages')}>
              <CardView
                name={item.name}
                img={item.image}
                description={item.description2}
                width={wp('95%')}
                borderColor={Color.burlywood}
                borderWidth={1}
                gap={10}
                minHeight={hp('13%')}
                borderRadius={wp('3%')}
                elevation={0}
                textNameColor={Color.chocolate}
                backgroundColor={Color.white}
                imageBackground={Color.blanchedalmond}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <CheckInternet
          isConnected={isConnected}
          setIsConnected={setIsConnected}
        />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section2: {
    backgroundColor: Color.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    flex: 3.5,
    gap: 20,
    padding: 10,
  },
  card: {
    width: '95%',
    height: '60%',
    backgroundColor: Color.white,
    borderRadius: hp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    elevation: 10,
  },
  img: {
    resizeMode: 'contain',
    width: '90%',
    height: '90%',
  },
  heading: {
    color: Color.grey,
    fontSize: hp('2.5%'),
    fontFamily: 'Roboto-BoldItalic',
    fontWeight: '600',
    marginTop: 40,
    elevation: 10,
  },
  locationText: {
    fontFamily: 'PTSans-Bold',
    color: Color.black,
    fontWeight: '600',
    fontSize: hp('2%'),
  },
  locationSubText: {
    color: Color.grey,
    fontSize: hp('1.7%'),
  },
});
