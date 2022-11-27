import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import {Colors, fontSize, fontWeight, spacing} from 'config/Theme';
import {priceSeparator} from 'utils/items';

const BookingItem = () => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.code}>#5234587</Text>
        <Text style={styles.shop}>Home Cleaner</Text>
        <Text style={styles.date}>22 Sep 21, 03:00 - 04:30 </Text>
      </View>
      <View style={styles.left}>
        <View>
          <Text style={styles.code}>Accepted</Text>
        </View>
        <Text>{priceSeparator(45000)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: spacing.medium,
    borderWidth: 1,
    padding: spacing.smaller,
    borderColor: Colors.border,
  },
  left: {justifyContent: 'space-between', alignItems: 'flex-end'},
  code: {color: Colors.buttonActiveBlue, fontWeight: fontWeight.bold},
  shop: {
    marginVertical: spacing.tiny,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.large,
  },
  date: {fontWeight: fontWeight.bold, color: Colors.border},
});

const status = (status: 'accepted' | 'submitted' | 'ongoing' | 'cancelled') =>
  ({} as ViewStyle);

export default BookingItem;
