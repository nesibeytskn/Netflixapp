import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {images} from '../../utils/constants';
import SpecialButton from '../CoreComponents/SpecialButton';
import PosterBarComponent from './PosterBarComponent';

const DailyTrend = () => {
  return (
    <View
      className=" relative px-3 rounded-lg h-4/6"
      style={{
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 18},
        shadowOpacity: 0.25,
        shadowRadius: 20.0,
        elevation: 24,
      }}>
      <Image
        style={{resizeMode: 'stretch'}}
        className="w-full h-full rounded-lg "
        source={{uri: images.dailyTrend}}
      />
      <View className="absolute bottom-5 left-16 ">
        <PosterBarComponent />
      </View>

      {/* <View className=" absolute flex-row justify-between bottom-0 p-7">
        <Text className="absolute text-white bottom-24 text-center ml-16  text-2xl font-bold">
          Dizilerde Bugün 1 Numara
        </Text>
        <SpecialButton title={'Oynat'} type={'light'} />
        <SpecialButton
          title={'Listem'}
          buttonIcon={'done'}
          type={'dark'}
          style={{marginLeft: 142}}
        />
    </View> */}
    </View>
  );
};

export default DailyTrend;
const styles = StyleSheet.create({});
