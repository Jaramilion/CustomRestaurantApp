import {StyleSheet} from 'react-native';
import colors from '../../../themes/colors';

const styles = StyleSheet.create({
  textFieldStyle: {
    backgroundColor: colors.pureWhite,
    color: colors.pureBlack,
    margin: 5,
    padding: 12,
    borderRadius: 6,
    borderWidth: 1.5,
  },
  placeholderText: {
    color: colors.pureBlack,
    paddingLeft: 10,
  },
  textFieldContainer: {
    padding: 3,
  },
});

export default styles;
