import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppreciationAward from '../../Screens/appreciation/AppreciationAward';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import App from '../../App';
import AppreciationAwardHeader from '../../components/AppreciationAwardHeader/AppreciationAwardHeader';
import {Image, Text} from 'react-native';
import AppreciationDetails from '../../Screens/AppreciationDetails/AppreciationDetails';
import {SafeAreaView} from 'react-native-safe-area-context';

const MainStack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const TabNavigator = () => (
  <SafeAreaView style={{flex: 1}}>
    <AppreciationAwardHeader />
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '500',
          lineHeight: 21,
          alignSelf: 'flex-start',
          textTransform: 'none',
        },
        tabBarStyle: {
          backgroundColor: '#FAFAFA',
          borderWidth: 0,
          paddingLeft: 10,
          borderBottomWidth: 0,
        },
        tabBarItemStyle: {
          width: 'auto',
          flexDirection: 'row',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#2E2E2E',
          borderWidth: 0,
          marginStart: 10,
        },
      }}>
      <Tab.Screen name="All" component={AppreciationAward} options={{}} />
      <Tab.Screen name="Redeemed" component={AppreciationAward} />
      <Tab.Screen
        name="Liked"
        component={AppreciationAward}
        options={{
          tabBarIcon: () => (
            <Image source={require('../../assets/Ellipse.png')} />
          ),
          tabBarIconStyle: {
            left: 75,
          },
        }}
      />
    </Tab.Navigator>
  </SafeAreaView>
);

const Main = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Tabs"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Tabs" component={TabNavigator} />
      <MainStack.Screen
        name="AppreciationAward"
        component={AppreciationAward}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="AppreciationDetails"
        component={AppreciationDetails}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};
export default Main;
