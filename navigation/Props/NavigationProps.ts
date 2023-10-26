import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  AppreciationDetails: undefined;
  AppreciationAward: undefined;
  // Add other screens here if needed
};

export type AppreciationDetailsProps = StackNavigationProp<
  RootStackParamList,
  'AppreciationDetails'
>;
