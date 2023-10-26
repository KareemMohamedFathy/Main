import {FlatList, Image, Pressable, Text, View} from 'react-native';
import CroatiaBar from '../CroatiaBar/CroatiaBar';
import {IExploreData, IPromotedData} from '../../dto/ListsDto';
import {useNavigation} from '@react-navigation/native';
import {AppreciationDetailsProps} from '../../navigation/Props/NavigationProps';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/Store';
import {styles} from './PromotedList.styles';

type Props = {
  promotedList?: IPromotedData[];
};

const PromotedList = ({promotedList}: Props) => {
  const navigation = useNavigation<AppreciationDetailsProps>();

  const onAppreciatePress = () => {
    navigation.navigate('AppreciationDetails');
  };
  const selectedIndex = useSelector(
    (state: RootState) => state.favourite.value,
  );
  const renderItem = ({item}) => (
    <Pressable onPress={() => onAppreciatePress()}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.imageUrl}} />
        <View style={styles.viewBar}>
          <CroatiaBar />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.statusContainer}>
          <Image
            source={require('../../assets/trending_up.png')}
            style={styles.icons}
          />
          {/* Use the image as an icon */}
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
        <Text style={styles.textHeader}>{item.name} </Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
        <View style={styles.statusContainer}>
          <Image
            source={require('../../assets/date_range.png')}
            style={styles.icons}
          />
          <Text style={styles.statusText}>{item.preSaleData}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={promotedList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};
export default PromotedList;
