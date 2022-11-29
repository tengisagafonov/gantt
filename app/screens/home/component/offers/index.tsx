import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors, fontSize, fontWeight, spacing} from 'config/Theme';
import {ChevronDoubleIcon} from 'assets/icons';
import {OfferItem} from './OfferItem';
import {useNavigation} from '@react-navigation/native';
import {OfferItemType} from 'app/types';

const items = [
  {
    title: 'Salon',
    src: 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image-600x338.png',
    service: 'Free Waxing',
    price: '6700',
    promo: '',
  },
  {
    title: 'Massage Therapy',
    src: 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image-600x338.png',
    service: 'Free Waxing',
    price: '69900',
    promo: '-15 %',
  },
  {
    title: 'Car cleaning',
    src: 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image-600x338.png',
    service: 'Free Waxing',
    price: '120000',
    promo: '',
  },
  {
    title: 'Salon',
    src: 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image-600x338.png',
    service: 'Free Waxing',
    price: '6700',
    promo: '',
  },
  {
    title: 'Salon',
    src: 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image-600x338.png',
    service: 'Free Waxing',
    price: '6700',
    promo: '',
  },
];

const Offers = ({item}: {item: OfferItemType}) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity
          style={styles.viewAll}
          onPress={() => navigation.navigate('List', {title: item.title})}>
          <Text style={styles.view}>View all</Text>
          <ChevronDoubleIcon color={Colors.buttonActiveBlue} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.offers}
        horizontal
        snapToInterval={202}
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}>
        {items.map((i, idx) => (
          <OfferItem key={idx} item={i} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.white,
    marginTop: spacing.medium,
    paddingVertical: spacing.medium,
    paddingLeft: spacing.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewAll: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.medium,
  },
  view: {
    color: Colors.buttonActiveBlue,
    fontWeight: fontWeight.bold,
    marginRight: spacing.tiny,
  },
  title: {
    fontWeight: fontWeight.bold,
    fontSize: fontSize.large,
  },
  offers: {
    marginTop: spacing.medium,
  },
});

export default Offers;
