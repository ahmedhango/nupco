import {StyleSheet} from 'react-native';
import typography from '../../theme/typography';
export const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    marginVertical: 8,
    borderRadius: 10,
    marginHorizontal: 4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  viewText: {
    alignSelf: 'center',
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 10,
    alignSelf: 'center',
    marginRight: 10,
  },

  name: {
    fontSize: typography.fontSize.fs16,
    fontFamily: typography.fontFamily.Tajawal_Bold,
    color: '#000',
    textAlign: 'left',
    marginTop: 5,
  },
  create: {
    fontSize: typography.fontSize.fs14,
    fontFamily: typography.fontFamily.Tajawal_Medium,
    color: '#000',
    textAlign: 'left',
    marginVertical: 4,
  },
  update: {
    fontSize: typography.fontSize.fs14,
    fontFamily: typography.fontFamily.Tajawal_Medium,
    color: '#000',
    textAlign: 'left',
  },
  number: {
    fontSize: typography.fontSize.fs12,
    fontFamily: typography.fontFamily.Tajawal_Regular,
    color: 'gray',
    textAlign: 'left',
    marginVertical: 4,
  },
});
