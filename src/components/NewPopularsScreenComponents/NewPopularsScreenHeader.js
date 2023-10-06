import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PIcon from '../CoreComponents/PIcon';
import Avatar from '../CoreComponents/Avatar';
import {images} from '../../utils/constants';
import NewPopularsScreenCategoryBar from './NewPopularsScreenCategoryBar';

const NewPopularsScreenHeader = () => {
  return (
    //Header için ana taşıyıcı
    <View>
      {/*üst kısım için taşıyıcı */}
      <View className="width-full flex-row  justify-between p-2 ">
        {/*Left side */}
        <View>
          <Text className="text-white font-bold text-xl ">Yeni ve Popular</Text>
        </View>

        <View className="flex-row p-2  " style={{gap: 20}}>
          <PIcon size={28} name={'search'} color={'white'} />
          <PIcon size={28} name={'notifications'} color={'white'} />
          <Avatar image={images.avatarImages} />
        </View>
      </View>
      {/*Kategoriler için ana taşıyıcı */}
      <View>
        <NewPopularsScreenCategoryBar />
      </View>
    </View>
  );
};

export default NewPopularsScreenHeader;

const styles = StyleSheet.create({});
