import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/dashboard/Dashboard';
import {Color} from '../../assets/colors/Colors';
import Icon from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import OrderHistory from '../screens/order/OrderHistory';
import Notification from '../screens/notification/Notification';
import Profile from '../screens/profile/Profile';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Color.grey,
        tabBarActiveTintColor: Color.chocolate,
      }}
      >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={({route}) => ({
          title: 'Dashboard',
          headerTitle: 'Welcome to Courier Pro',
          headerTitleStyle: {
            color: Color.chocolate,
            fontWeight: '500',
            fontSize: hp('2.5%'),
          },
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="home"
              color={focused ? Color.chocolate : Color.grey}
              size={size}
            />
          ),
        })}
      />

      <Tab.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={({route}) => ({
          title: 'Order',
          headerTitle: 'Orders',
          headerTitleStyle: {
            color: Color.black,
            fontWeight: '500',
            fontSize: hp('2.5%'),
          },
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="shopping-bag"
              color={focused ? Color.chocolate : Color.grey}
              size={size}
            />
          ),
        })}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={({route}) => ({
          title: 'Notifications',
          headerTitle: 'Notifications',
          headerTitleStyle: {
            color: Color.black,
            fontWeight: '500',
            fontSize: hp('2.5%'),
          },
          tabBarIcon: ({focused, color, size}) => (
            <Material
              name="bell"
              color={focused ? Color.chocolate : Color.grey}
              size={size}
            />
          ),
        })}
      />
      

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({route}) => ({
          title: 'Profile',
          headerShown: false,
          headerTitleStyle: {
            color: Color.black,
            fontWeight: '500',
            fontSize: hp('2.5%'),
          },
          tabBarIcon: ({focused, color, size}) => (
            <Material
              name="account"
              color={focused ? Color.chocolate : Color.grey}
              size={size}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
