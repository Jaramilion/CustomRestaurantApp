import React, {JSX, ReactNode} from 'react';
import {Text, StyleProp, TextStyle, TouchableOpacity} from 'react-native';
import styles from './styles';
import CustomText from '../../atoms/CustomText/CustomText';

interface Props {
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
  title: string;
}

function ActionButton({style, title, onPress}: Props): JSX.Element {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      style={[{...styles.container}, style]}>
      <CustomText>{title}</CustomText>
    </TouchableOpacity>
  );
}

export default ActionButton;
