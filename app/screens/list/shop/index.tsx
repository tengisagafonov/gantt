import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors, fontSize, fontWeight, spacing} from 'config/Theme';
import {ChevronIcon, LocationIcon, MedalIcon, Rating} from 'assets/icons';
import {OfferItemType} from 'app/types';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {HomeStackList} from 'app/screens';
import {opacityColor} from 'utils/items';
import {screenWidth} from 'config/Theme';

interface IShopProps {
  item: OfferItemType;
  navigation: NativeStackNavigationProp<HomeStackList, 'Shop'>;
}

function Shop(props: IShopProps) {
  const {item, navigation} = props;
  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => navigation.navigate('Shop', {title: item.name})}>
      {item?.isCertified && <MedalIcon style={styles.badge} />}
      <FastImage
        style={styles.logo}
        source={{
          uri: 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image-600x338.png',
        }}
      />
      <View style={[styles.row, styles.spacing]}>
        <View>
          <Text style={styles.title}> {item?.name}</Text>
          <View style={[styles.row, styles.gap]}>
            <Text> E-Sports</Text>
          </View>
          <View style={styles.row}>
            <LocationIcon style={styles.icon} color={Colors.red} />
            <TouchableOpacity>
              <Text style={[styles.text, styles.location]}>Bayngol dureg</Text>
            </TouchableOpacity>
            <Rating style={styles.icon} color={Colors.yellow} />
            <Text style={styles.text}>4.5</Text>
            <Text> (50+)</Text>
          </View>
        </View>
        <View style={styles.chevron}>
          <ChevronIcon color={Colors.white} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.white,
    marginTop: spacing.medium,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: opacityColor(Colors.border, 0.4),
    alignItems: 'center',
    marginHorizontal: spacing.medium,
  },
  badge: {position: 'absolute', top: 12, left: 8, zIndex: 2},
  gap: {marginVertical: spacing.tiny},
  spacing: {padding: spacing.medium},
  row: {flexDirection: 'row', alignItems: 'center', width: '100%'},
  title: {fontSize: fontSize.large, fontWeight: fontWeight.bold},
  logo: {
    width: screenWidth - spacing.medium * 2 - 2,
    borderRadius: 4,
    height: screenWidth * 0.4,
  },
  location: {color: Colors.buttonActiveBlue, textDecorationLine: 'underline'},
  icon: {transform: [{scale: 0.7}]},
  text: {fontWeight: fontWeight.bold},
  chevron: {
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    borderRadius: 12,
    transform: [{rotate: '180deg'}],
    backgroundColor: opacityColor(Colors.border, 0.5),
  },
});

export default Shop;
