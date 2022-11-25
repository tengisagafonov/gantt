import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from 'app/components/header';

const Booking = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Header title={'Booking'} />
      <View style={styles.main}>
        <Text>Booking</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {alignSelf: 'center'},
});

export default Booking;
