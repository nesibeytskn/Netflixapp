import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/AppScreens/HomeScreen';
import GamesScreen from '../screens/AppScreens/GamesScreen';
import NewPopularsScreen from '../screens/AppScreens/NewPopularsScreen';
import DownloadsScreen from '../screens/AppScreens/DownloadsScreen';

const BottomTabNavigation = () => {
  const TabStack = createBottomTabNavigator();
  return (
    <TabStack.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'GamingScreen') {
            iconName = focused ? 'sports-esports' : 'sports-esports';
          } else if (route.name === 'NewPopularsScreen') {
            iconName = focused ? 'playlist-play' : 'playlist-play';
          } else if (route.name === 'DownloadsScreen') {
            iconName = focused ? 'downloading' : 'downloading';
          }

          // You can return any component that you like here!
          return <Icons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <TabStack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <TabStack.Screen
        options={{headerShown: false}}
        name="GamingScreen"
        component={GamesScreen}
      />
      <TabStack.Screen
        options={{headerShown: false}}
        name="NewPopularsScreen"
        component={NewPopularsScreen}
      />
      <TabStack.Screen
        options={{headerShown: false}}
        name="DownloadsScreen"
        component={DownloadsScreen}
      />
    </TabStack.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
