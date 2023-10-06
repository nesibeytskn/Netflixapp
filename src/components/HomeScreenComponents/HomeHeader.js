import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import PIcon from '../CoreComponents/PIcon';
import Avatar from '../CoreComponents/Avatar';
import {images} from '../../utils/constants';

const HomeHeader = () => {
  return (
    <View className="bg-transparent flex-row justify-between p-2">
      {/*icon kutusu*/}
      <View className="w-12 h-12">
        <Image
          className="w-12 h-14"
          source={require('../../assets/images/netflixlogo.png')}
        />
      </View>

      {/*icon kutusu */}

      <View className="flex-row items-center justify-between w-24">
        <PIcon name="search" size={28} color={'white'} />
        <Avatar image={images.avatarImages} />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
