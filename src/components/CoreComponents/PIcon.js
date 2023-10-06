import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PIcon = ({name, size, color, claass}) => {
  return (
    <View className={claass}>
      <Icon name={name} size={size} color={color} />
    </View>
  );
};

export default PIcon;

const styles = StyleSheet.create({});
