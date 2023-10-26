import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {styles} from './AppreciationDetails.styles';
import {IExploreData} from '../../dto/ListsDto';
import CroatiaBar from '../../components/CroatiaBar/CroatiaBar';
import CircularButton from '../../components/Atoms/CircularButton/CircularButton';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const AppreciationDetails = () => {
  const ExploreDetailsArray = [
    {
      name: 'Andy Pitcher',
      preSaleData: 'Presale ends on 04/02/2023',
      place: 'Riyadh',
      date: '02/04/2023',
      time: '20:00',
      descriptions:
        'A unique opportunity to hear Andy Pitcher live in KSA! Enjoy the guitar sounds of one the best young guitarists in the world.',
      preSaleAvaliablity:
        'Redeem the voucher before 01/03/2023. Number of vouchers is limited.',
    },
  ];
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/Image.png')}
          />
          <View style={styles.viewBar}>
            <Pressable style={styles.backLayer} onPress={() => goBack()}>
              <Image source={require('../../assets/arrow_back.png')} />
            </Pressable>
          </View>
          <View style={styles.viewFavouriteBar}>
            <Image source={require('../../assets/Favourite.png')} />
          </View>
        </View>
        <CroatiaBar noIcon />

        <View style={styles.mainContainer}>
          <Text style={styles.textHeader}>{ExploreDetailsArray[0].name} </Text>
          <Text style={styles.descriptionText}>
            {ExploreDetailsArray[0].descriptions}
          </Text>
          <Text style={styles.descriptionText}>{'Details'}</Text>
          <Text style={styles.textLabel}>Event date</Text>
          <View style={styles.statusOuterContainer}>
            <View style={styles.statusContainer}>
              <Text style={styles.textDetails}>
                {ExploreDetailsArray[0].date}
              </Text>
              <Text style={styles.dotText}>{'.'}</Text>
              <Text style={styles.textDetails}>
                {ExploreDetailsArray[0].time}
              </Text>
            </View>
            <Image
              source={require('../../assets/chevron_right.png')}
              style={styles.icons}
            />
          </View>
          <View style={styles.statusContainer}>
            <Image
              source={require('../../assets/date_range.png')}
              style={styles.icons}
            />
            {/* Use the image as an icon */}
            <Text style={styles.textDetailsBold}>Add to calendar</Text>
          </View>
          <Text style={styles.textLabel}>Location</Text>

          <View style={styles.statusOuterContainer}>
            <View style={styles.statusContainer}>
              <Text style={styles.textDetails}>
                restaurantName Boulevard Riyadh City 13, Riyadh, KSA
              </Text>
            </View>
            <Image
              source={require('../../assets/chevron_right.png')}
              style={styles.icons}
            />
          </View>
          <Text style={styles.textLabel}>Pre-sale availability</Text>

          <View style={styles.statusOuterContainer}>
            <View style={styles.statusContainer}>
              <Text style={styles.textDetails}>
                {ExploreDetailsArray[0].preSaleAvaliablity}
              </Text>
            </View>
            <Image
              source={require('../../assets/chevron_right.png')}
              style={styles.icons}
            />
          </View>
          <Text style={styles.textDetailsBold}>About the organiser</Text>
          <View style={styles.organizer}>
            <View style={styles.circle} />
            <View>
              <Text>RestaurantName</Text>

              <Text style={styles.textLabelWidth}>
                One of Top 10 restaurants in KSA. Read more in
                <Text style={styles.terms}>
                  {' '}
                  Organiser’sTerms & Conditions.
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.tierUpgrade}>
            <CircularButton name="Upgrade your Tier" />
          </View>

          <View style={styles.readMore}>
            <Text style={styles.textLabelWidth}>
              Read more in
              <Text style={styles.terms}> Organiser’sTerms & Conditions.</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AppreciationDetails;
