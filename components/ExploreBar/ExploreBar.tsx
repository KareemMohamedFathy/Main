import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './ExploreBar.styles';
import {useState} from 'react';
import SortFilter from '../SortFilter/SortFilter';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/Store';

type Props = {
  hideFilter?: boolean;
  headerText: String;
};

const ExploreBar = ({hideFilter, headerText}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const selectedOption = useSelector(
    (state: RootState) => state.radio.selectedOption,
  );

  return (
    <>
      <View style={styles.flexed}>
        <Text style={styles.text}>{headerText}</Text>
        {(hideFilter === undefined || !hideFilter) && (
          <Pressable
            style={styles.filter}
            onPress={() => setModalVisible(true)}>
            <Text>
              {selectedOption ? selectedOption : 'Recommended for you'}
            </Text>

            <Image source={require('../../assets/expand_more.png')} />
          </Pressable>
        )}
      </View>
      <SortFilter
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};
export default ExploreBar;
