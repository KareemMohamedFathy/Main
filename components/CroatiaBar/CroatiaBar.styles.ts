import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    maxHeight: 32,
    marginTop: 30,
    alignItems: 'center',
    marginHorizontal: 20,
  },

  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#2E2E2E',
  },
  new: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#FF371E',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 18,
    marginEnd: 8,
    color: 'white',
  },
  croatia: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#2E2E2E',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 18,
    marginEnd: 8,
    color: 'white',
  },
});
