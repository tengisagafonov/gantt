import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors, fontWeight, spacing} from 'config/Theme';
import {priceSeparator} from 'utils/items';

export const OfferItem = ({item}: {item: any}) => {
  return (
    <View style={styles.main}>
      <FastImage source={{uri: item.src}} style={styles.img}>
        {item?.promo && (
          <View style={styles.promo}>
            <Text style={styles.promoText}>{item.promo}</Text>
          </View>
        )}
      </FastImage>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.service}>{item.service}</Text>
      <Text>
        <Text style={styles.start}>starts at </Text>
        <Text style={styles.price}>{priceSeparator(item.price)}₮</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {marginRight: spacing.medium, width: 190},
  img: {
    width: 190,
    height: 110,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: spacing.tiny,
    borderColor: Colors.buttonInactive,
    backgroundColor: '#000',
  },
  promo: {
    position: 'absolute',
    opacity: 0.8,
    bottom: 0,
    left: 0,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderTopRightRadius: 5,
    borderColor: Colors.buttonInactive,
  },
  promoText: {padding: spacing.tiny, color: Colors.border},
  title: {fontWeight: fontWeight.bold},
  service: {
    marginVertical: spacing.tiny,
    color: Colors.border,
    fontWeight: fontWeight.bold,
  },
  start: {
    color: Colors.start,
    fontWeight: fontWeight.bold,
  },
  price: {
    fontWeight: fontWeight.bold,
    color: Colors.green,
  },
});
