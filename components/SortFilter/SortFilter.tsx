import React, {useEffect, useMemo, useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './SortFilter.styles';
import {RadioButton} from '../Atoms/RadioButton/RadioButton';

import {RootState} from '../../store/Store';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedOption} from '../../store/RadioSlice';
import CircularButton from '../Atoms/CircularButton/CircularButton';

type Props = {
  modalVisible: boolean;
  setModalVisible: Function;
};
const SortFilter = ({modalVisible, setModalVisible}: Props) => {
  const options = ['Alphabetical', 'Most Recent', 'Recommended For You'];
  const [selected, setSelected] = useState(
    new Array(options.length).fill(false),
  );

  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  const handleRadioButtonSelect = () => {
    const indexOfFalse = selected.findIndex(value => value === true);

    dispatch(setSelectedOption(options[indexOfFalse]));
    setModalVisible(!modalVisible);
  };
  const handleRadioButtonPress = index => {
    setDisabled(false);
    const updatedSelected = new Array(options.length).fill(false);
    updatedSelected[index] = true;
    setSelected(updatedSelected);
  };
  return (
    <>
      <Modal
        animationType="slide"
        style={styles.modalStyle}
        visible={modalVisible}
        transparent
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.sort}> Sort </Text>

              <TouchableOpacity
                style={styles.close}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Image source={require('../../assets/close.png')} />
              </TouchableOpacity>
            </View>

            {options.map((option, index) => (
              <RadioButton
                key={option}
                text={option}
                selected={selected[index]}
                setSelected={() => {
                  handleRadioButtonPress(index);
                }}
              />
            ))}
            <View style={styles.button}>
              <CircularButton
                onPressButton={handleRadioButtonSelect}
                disabled={disabled}
                name="Apply"
              />
            </View>
          </View>
        </View>
      </Modal>
      {modalVisible && <View style={styles.dim} />}
    </>
  );
};
export default SortFilter;
