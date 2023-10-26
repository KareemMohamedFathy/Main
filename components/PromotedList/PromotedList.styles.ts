import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D6EBEC',
    borderRadius: 8,
    elevation: 2,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 24,
    marginBottom: 8,
  },

  textHeader: {
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 28,
    color: '#2E2E2E',
    marginBottom: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#2E2E2E',
  },

  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: '#666666',
    marginBottom: 4,
    marginEnd: 3,
  },

  image: {
    width: '100%',
    height: 260,
    borderRadius: 8,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 12,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    marginEnd: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  viewBar: {
    position: 'absolute',
    top: -10,
    flex: 1,
    flexDirection: 'row',
  },
});
