import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import PIcon from './PIcon';

const SpecialButton = ({onPress, style, title, buttonIcon, type}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${
        type == 'light' ? 'bg-white' : type == 'dark' ? 'bg-gray-800' : null
      } flex-row px-5 py-2 items-center justify-center rounded `}
      style={style}>
      {buttonIcon && (
        <PIcon
          name={buttonIcon}
          size={23}
          color={`${
            type == 'light' ? 'black' : type == 'dark' ? 'white' : null
          }`}
          style={'mr-1'}
        />
      )}
      <Text
        className={`${
          type == 'light' ? 'text-black' : type == 'dark' ? 'text-white' : null
        } text-xl`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SpecialButton;

const styles = StyleSheet.create({});
