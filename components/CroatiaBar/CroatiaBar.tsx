import {Image, Pressable, Text, View} from 'react-native';
import CroatiaBarStyles from './CroatiaBar.styles';
import {useDispatch} from 'react-redux';
import {setFavourite} from '../../store/FavouriteSlice';

type props = {
  favourite?: boolean;
  noplus?: boolean;
  noIcon?: boolean;
  index?: number;
  filled?: boolean;
};
const CroatiaBar = ({favourite, noplus, noIcon, index, filled}: props) => {
  const dispatch = useDispatch();
  const onPressFavourite = () => {
    index && dispatch(setFavourite(index));
  };

  const styles = CroatiaBarStyles;
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.new}>New</Text>
        {!noplus && <Text style={styles.croatia}>Croatia plus</Text>}
      </View>
      {!noIcon && (
        <Pressable onPress={() => favourite && onPressFavourite()}>
          <Image
            source={
              !favourite
                ? require('../../assets/ZoomIn.png')
                : filled
                ? require('../../assets/filledFavourite.png')
                : require('../../assets/Favourite.png')
            }
          />
        </Pressable>
      )}
    </View>
  );
};
export default CroatiaBar;
