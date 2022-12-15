import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {opacityColor, priceSeparator} from 'utils/items';
import {Colors, fontWeight, spacing} from 'config/Theme';

const offers = [
  {name: "Man's regular haircut"},
  {name: "Man's regular haircut"},
  {name: "Man's regular haircut"},
  {name: "Man's regular haircut"},
  {name: "Man's regular haircut"},
  {name: 'Wtf'},
];

const Offers = () => {
  return (
    <View>
      {offers.map((i, idx) => (
        <View key={idx} style={styles.item}>
          <Text style={styles.title}>{i.name}</Text>
          <View style={styles.row}>
            <View style={styles.info}>
              <Text>{priceSeparator(35000)}</Text>
              <Text>15 min</Text>
            </View>
            <TouchableOpacity style={styles.book}>
              <Text style={styles.text}>Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginBottom: spacing.huge,
  },
  row: {flexDirection: 'row'},
  info: {alignItems: 'flex-end', marginRight: spacing.medium},
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: opacityColor(Colors.border, 0.2),
    justifyContent: 'space-between',
    padding: spacing.medium,
    marginVertical: spacing.medium,
  },
  book: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.huge,
    borderRadius: 4,
    backgroundColor: Colors.buttonActiveBlue,
  },
  title: {fontWeight: fontWeight.bold},
  text: {color: Colors.white, fontWeight: fontWeight.bold},
});

export default Offers;
