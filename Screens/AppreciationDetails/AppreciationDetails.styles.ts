import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    elevation: 2,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
    marginBottom: 8,
  },
  textHeader: {
    fontSize: 28,
    fontWeight: '500',
    lineHeight: 34,
    color: '#2E2E2E',
    marginBottom: 4,
    marginTop: 16,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#2E2E2E',
  },

  descriptionText: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 25,
    color: '#2E2E2E',
    marginBottom: 20,
    marginEnd: 3,
  },
  organizerText: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 25,
    color: '#2E2E2E',
  },
  dotText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: '#666666',
    marginEnd: 6,
    marginStart: 6,
    marginBottom: 6,
  },

  image: {
    width: '100%',
    height: 490,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 12,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusOuterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  icons: {
    marginEnd: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  viewBar: {
    position: 'absolute',
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  viewFavouriteBar: {
    position: 'absolute',
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 12,
    marginStart: 340,
  },
  descriptionContainer: {
    flexDirection: 'row',
  },
  textDetails: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21,
    color: '#2E2E2E',
  },
  textDetailsBold: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21,
    color: '#2E2E2E',
  },
  textLabel: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
  },
  organizer: {
    marginTop: 12,
    flexDirection: 'row',
  },
  circle: {
    height: 79,
    width: 79,
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    marginEnd: 12,
  },
  terms: {
    color: '#006E99',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    textDecorationLine: 'underline',
  },
  textLabelWidth: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    maxWidth: '90%',
  },
  readMore: {
    alignItems: 'center',
    marginVertical: 16,
  },
  tierUpgrade: {
    marginTop: 46,
  },
  backLayer: {
    height: 36,
    width: 36,
    borderRadius: 64,
    backgroundColor: '#FAFAFA99',
    alignItems: 'center',
    padding: 6,
  },
});
