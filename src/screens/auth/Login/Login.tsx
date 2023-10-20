import React, {JSX, useState} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import colors from '../../../themes/colors';
import TextField from '../../../components/molecules/TextField/TextField';
import {handleChange} from '../../../utils/textFieldHelper';
import ActionButton from '../../../components/molecules/Button/ActionButton';
import {resolveTranslation} from '../../../utils/common';

function Login(): JSX.Element {
  const textPath = 'auth.loginScreen.';

  const texts = {
    emailInput: resolveTranslation(textPath, 'emailInput'),
    passwordInput: resolveTranslation(textPath, 'passwordInput'),
  };
  const [inputText, setInputText] = useState('');
  const [inputTextDos, setInputTextDos] = useState('');
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.pureWhite} />
      <ScrollView>
        <TextField
          placeholder={texts.emailInput}
          text={inputText}
          onChange={handleChange(setInputText)}
        />
        <TextField
          placeholder={texts.passwordInput}
          text={inputTextDos}
          onChange={handleChange(setInputTextDos)}
        />
        <ActionButton title="Common ground" />
      </ScrollView>
    </View>
  );
}

export default Login;
