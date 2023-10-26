import {Pressable, Text, View} from 'react-native';
import {styles} from './RadioButton.styles';
type props = {
  selected: boolean;
  text: string;
  setSelected: Function;
};
export function RadioButton({selected, text, setSelected}: props) {
  return (
    <Pressable onPress={() => setSelected(true)}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>

        <View
          style={
            !selected ? styles.notselectedradio : styles.notselectedradiobutton
          }>
          {selected ? <View style={styles.selectedradio} /> : null}
        </View>
      </View>
    </Pressable>
  );
}
