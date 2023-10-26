import React, {useMemo, useState} from 'react';
import {
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './CircularButtons.styles';

type props = {
  onPressButton?: () => void;
  disabled?: boolean;
  name: string;
};
const CircularButton = ({onPressButton, disabled, name}: props) => {
  return (
    <Pressable
      style={!disabled ? styles.button : styles.inactiveButton}
      onPress={onPressButton}
      disabled={disabled}>
      <Text style={styles.buttonText}>{name}</Text>
    </Pressable>
  );
};
export default CircularButton;
