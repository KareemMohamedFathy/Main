import {Image, Text, View} from 'react-native';
import {styles} from './AppreciationAwardHeader.styles';

const AppreciationAwardHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.flexed}>
        <Image source={require('../../assets/arrow_back.png')} />

        <Text style={styles.Text}>Appreciations</Text>

        <Image source={require('../../assets/filter_list.png')} />
      </View>
    </View>
  );
};
export default AppreciationAwardHeader;
