import {StyleSheet} from 'react-native';

const globalStyle = StyleSheet.create({
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
  messageNumber: {
    backgroundColor: '#F35BAC',
    width: 12,
    height: 12,
    borderRadius: 12,
    position: 'absolute',
    top: 10,
    right: 10,
    // padding: 2,
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
});
export default globalStyle;
