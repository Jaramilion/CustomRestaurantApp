import React, {JSX, ReactNode} from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';
import styles from './styles';

interface Props {
  style?: StyleProp<TextStyle>;
  children: ReactNode;
  numberOfLines?: number;
}

function CustomText({numberOfLines, style, children}: Props): JSX.Element {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.textStyle, style]}>
      {children}
    </Text>
  );
}

export default CustomText;
