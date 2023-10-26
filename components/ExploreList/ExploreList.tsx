import {FlatList, Image, Pressable, Text, View} from 'react-native';
import CroatiaBar from '../CroatiaBar/CroatiaBar';
import {IExploreData, IPromotedData} from '../../dto/ListsDto';
import {useNavigation} from '@react-navigation/native';
import {AppreciationDetailsProps} from '../../navigation/Props/NavigationProps';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/Store';
import {styles} from './ExploreList.styles';

type Props = {
  exploreList?: IExploreData[];
};

const ExploreList = ({exploreList}: Props) => {
  const navigation = useNavigation<AppreciationDetailsProps>();

  const onAppreciatePress = () => {
    navigation.navigate('AppreciationDetails');
  };
  const selectedIndex = useSelector(
    (state: RootState) => state.favourite.value,
  );

  const renderExploreItem = ({item, index}) => (
    <Pressable onPress={() => onAppreciatePress()}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/Image.png')}
        />
        <View style={styles.viewBar}>
          <CroatiaBar
            favourite
            noplus
            index={index}
            filled={selectedIndex[index]}
          />
        </View>
      </View>
      <View style={styles.cardExplore}>
        <Text style={styles.textHeader}>{item.name} </Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{item.place}</Text>
          <Text style={styles.dotText}>{'.'}</Text>
          <Text style={styles.descriptionText}>{item.date}</Text>
          <Text style={styles.dotText}>{'.'}</Text>
          <Text style={styles.descriptionText}>{item.time}</Text>
        </View>
        <View style={styles.statusContainer}>
          <Image
            source={require('../../assets/date_range.png')}
            style={styles.icons}
          />
          {/* Use the image as an icon */}
          <Text style={styles.statusText}>{item.preSaleData}</Text>
        </View>
      </View>
    </Pressable>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={exploreList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderExploreItem}
      />
    </View>
  );
};
export default ExploreList;
