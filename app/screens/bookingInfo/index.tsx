import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import Header from 'app/components/header';
import {RouteProp} from '@react-navigation/native';
import Topic from './components/topic';
import {spacing, Colors, fontSize, fontWeight} from 'config/Theme';
import {Status} from 'app/types';

const orderProfile = {
  service: {title: 'haircut', price: '50000'},
  name: 'Peter Davidson',
  phone: '99575023',
  location: 'bayangol dureg',
  code: '#5840983',
};

const BookingInfo = ({
  route,
}: {
  route: RouteProp<{params: {title: string; status: Status}}, 'params'>;
}) => {
  const {title, status} = route.params;

  return (
    <View style={styles.main}>
      <Header title={title} phone={orderProfile.phone} />
      <ScrollView>
        <Topic orderProfile={orderProfile} stat={status} />
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Cancel Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
  button: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: spacing.medium,
    backgroundColor: Colors.buttonActiveBlue,
    marginBottom: spacing.medium,
  },
  text: {
    color: Colors.white,
    fontSize: fontSize.large,
    fontWeight: fontWeight.medium,
  },
});

export default BookingInfo;
