import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeScreenComponents/HomeHeader';
import HomeFilterBar from '../../components/HomeScreenComponents/HomeFilterBar';
import DailyTrend from '../../components/HomeScreenComponents/DailyTrend';
import HomeCard from '../../components/HomeScreenComponents/HomeCard';

const HomeScreen = () => {
  return (
    <View className="bg-gray-500 flex-1">
      <HomeHeader />

      <HomeFilterBar />
      <DailyTrend />
      <HomeCard categoryTitle={`Netflix'te popüler `} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
