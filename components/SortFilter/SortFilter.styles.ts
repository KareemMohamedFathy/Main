import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalStyle: {
    margin: 0,
  },
  container: {
    alignContent: 'center',
    textAlign: 'right',
    backgroundColor: '#FAFAFA',
    height: 370,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  radio: {
    alignContent: 'space-between',
    backgroundColor: 'red',
    alignItems: 'flex-start',
  },
  sort: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: '500',
    lineHeight: 21,
    color: 'black',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  close: {
    marginStart: 'auto',
  },
  button: {
    marginVertical: 32,
    marginHorizontal: 20,
  },
  dim: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
