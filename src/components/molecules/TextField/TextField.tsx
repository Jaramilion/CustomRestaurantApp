import React, {JSX, useState} from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
  Text,
  StyleProp,
  TextInputProps,
} from 'react-native';
import styles from './styles';
import colors from '../../../themes/colors';
import CustomText from '../../atoms/CustomText/CustomText';

interface Props {
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  text: string;
  placeholder?: string;
  style?: StyleProp<TextInputProps>;
}

function TextField({onChange, placeholder, text, style}: Props): JSX.Element {
  const [isTextInputFocused, setTextInputFocused] = useState(false);

  return (
    <View style={styles.textFieldContainer}>
      <CustomText
        style={[
          styles.placeholderText,
          {
            color: isTextInputFocused
              ? colors.businessMainColor
              : colors.pureBlack,
          },
        ]}>
        {placeholder}
      </CustomText>
      <TextInput
        onChange={onChange}
        value={text}
        onFocus={() => setTextInputFocused(true)}
        onBlur={() => setTextInputFocused(false)}
        placeholder={placeholder}
        style={[
          {...styles.textFieldStyle},
          style,
          {
            borderColor: isTextInputFocused
              ? colors.businessMainColor
              : colors.grayTextField,
          },
        ]}
      />
    </View>
  );
}

export default TextField;
