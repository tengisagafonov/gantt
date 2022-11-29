import React from 'react';
import {View, Text} from 'react-native';
import Header from 'app/components/header';

const BookingInfo = ({route}: {route: any}) => {
  return (
    <View>
      <Header title={route?.params.title || ''} />
      <Text>Booking Info</Text>
    </View>
  );
};

export default BookingInfo;
