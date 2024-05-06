import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './src/screens/welcome/Welcome';
import Signup from './src/screens/auth/Signup';
import Splash from './src/screens/splash/Splash';
import Verification from './src/screens/auth/Verification';
import BottomTabNavigation from './src/navigations/BottomTabNavigation';
import MapScreen from './src/screens/map/MapScreen';
import OrderForm from './src/screens/order/OrderForm';
import SendPackage from './src/screens/order/SendPackage';
import {Provider} from 'react-redux';
import store from './src/services/redux/store/Store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Verification"
            component={Verification}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="BottomTabNavigation"
            component={BottomTabNavigation}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Map"
            component={MapScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="OrderForm"
            component={OrderForm}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Send Packages"
            component={SendPackage}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
