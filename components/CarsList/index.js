import React from 'react';
import {View, Text, FlatList, Dimensions, StatusBar} from 'react-native';
import CarItem from "../CarItem";

import styles from './style';
import cars from './cars';

const CarsList = (props) => {
  return (
    <View style={styles.container}>
     
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval = {
          Platform.OS === 'android' ? Dimensions.get('screen').height - StatusBar.currentHeight : Dimensions.get('window').height
        }
      />
    </View>
  );
};

export default CarsList;
