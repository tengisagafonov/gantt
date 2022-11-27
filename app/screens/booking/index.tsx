import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Header from 'app/components/header';
import {Colors} from 'config/Theme';
import BookingMenu from 'app/screens/booking/components/menu';
import BookingItem from 'app/screens/booking/components/bookingItem';
import {Status} from 'app/types';

const data = [
  {id: 1, status: Status.submitted},
  {id: 2, status: Status.accepted},
  {id: 3, status: Status.cancelled},
  {id: 4, status: Status.ongoing},
];

const Booking = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Header title={'Booking'} />
      <View style={styles.main}>
        <BookingMenu />
        <FlatList
          data={data}
          renderItem={({item}) => <BookingItem item={item} />}
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
