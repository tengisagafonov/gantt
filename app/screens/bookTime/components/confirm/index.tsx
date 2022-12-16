import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {priceSeparator} from 'utils/items';
import {Colors, fontSize, fontWeight, spacing} from 'config/Theme';

const Confirm = () => {
  return (
    <View style={styles.bottom}>
      <View>
        <Text style={styles.price}>{priceSeparator(60000)}</Text>
        <Text>55 min</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.whiteText}>Book</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flexDirection: 'row',
    padding: spacing.medium,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.huge,
    width: '50%',
    backgroundColor: Colors.buttonActiveBlue,
    borderRadius: 8,
  },
  price: {fontWeight: fontWeight.bold, fontSize: fontSize.large},
  whiteText: {
    color: Colors.white,
    fontWeight: fontWeight.bold,
    alignSelf: 'center',
  },
});

export default Confirm;
