import React from 'react';
import {View, Text} from 'react-native';
import Header from 'app/components/header';
import {RouteProp} from '@react-navigation/native';

const BookingInfo = ({
  route,
}: {
  route: RouteProp<{params: {title: string}}, 'params'>;
}) => {
  const {title} = route.params;

  return (
    <View>
      <Header title={title} />
      <Text>Booking Info</Text>
    </View>
  );
};

export default BookingInfo;
