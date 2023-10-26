import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 16,
  },
  text: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    color: '#2E2E2E',
  },
  notselectedradio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#B3B3B3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notselectedradiobutton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FF371E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedradio: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#FF371E',
  },
});
