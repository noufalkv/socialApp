import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize, verticalScale} from './styles/scaling';
import {getFontFamily} from './fonts/helper';

const globalStyle = StyleSheet.create({
  header: {
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: horizontalScale(14),
    borderRadius: horizontalScale(100),
    backgroundColor: '#F9FAFB',
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: horizontalScale(10),
    position: 'absolute',
    right: horizontalScale(10),
    top: verticalScale(10),
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: scaleFontSize(6),
    fontFamily: getFontFamily('Inter', '600'),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginHorizontal: 26,
  },
  messageContainer: {
    backgroundColor: '#F9FAFB',
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },

  messageNumberTxt: {
    color: '#ffffff',
    fontSize: 10,
    paddingLeft: 3,
  },
  userStoryContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
  userPostContainer: {marginHorizontal: 24},
});
export default globalStyle;
