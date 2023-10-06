import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useContext} from 'react';
import CategoryItem from './CategoryItem';
import {PopularsCategory} from '../../utils/constants';
import {DataContext} from '../../context/context';

const NewPopularsScreenCategoryBar = () => {
  const {setCatIndex} = useContext(DataContext);
  return (
    <View className=" w-full ">
      <FlatList
        data={PopularsCategory}
        horizontal
        renderItem={({item, index}) => (
          <CategoryItem
            source={require('../../assets/catImages/fire.png')}
            catName={item.categoryName}
            onPress={() => setCatIndex(item.categoryName)}
          />
        )}
      />
    </View>
  );
};

export default NewPopularsScreenCategoryBar;

const styles = StyleSheet.create({});
