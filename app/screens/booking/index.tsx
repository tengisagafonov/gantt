import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Header from 'app/components/header';
import {Colors} from 'config/Theme';
import BookingMenu from 'app/screens/booking/components/menu';
import BookingItem from 'app/screens/booking/components/bookingItem';

const Booking = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Header title={'Booking'} />
      <View style={styles.main}>
        <BookingMenu />
        <FlatList
          data={[{id: 1}, {id: 2}]}
          renderItem={() => <BookingItem />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.white,
  },
});

export default Booking;
