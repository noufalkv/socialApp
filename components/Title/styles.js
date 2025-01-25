import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const styles = StyleSheet.create({
  title: {
    fontFamily: getFontFamily('Inter_18pt', 'Bold'),
    fontSize: 24,
    color: '#022150',
  },
});
export default styles;
