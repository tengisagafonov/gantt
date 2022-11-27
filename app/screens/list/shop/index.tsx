import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors, fontSize, fontWeight, spacing} from 'config/Theme';
import {ChevronIcon, LocationIcon, MedalIcon, Rating} from 'assets/icons';

function Shop({item, navigation}: {item: any; navigation: any}) {
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
      <View>
        <Text style={styles.title}> {item?.name}</Text>
        <View style={[styles.row, styles.gap]}>
          <Text> E-Sports</Text>
        </View>
        <View style={styles.row}>
          <LocationIcon style={styles.icon} color={Colors.red} />
          <TouchableOpacity>
            <Text style={[styles.text, styles.location]}> Bayngol dureg </Text>
          </TouchableOpacity>
          <Rating style={styles.icon} color={Colors.yellow} />
          <Text style={styles.text}>4.5</Text>
          <Text> (50+)</Text>
        </View>
      </View>
      <View style={styles.chevron}>
        <ChevronIcon color={Colors.white} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    marginTop: spacing.tiny,
    borderWidth: 1,
    borderColor: Colors.buttonInactive,
    alignItems: 'center',
    padding: spacing.medium,
    marginHorizontal: spacing.tiny,
  },
  badge: {position: 'absolute', top: 12, left: 8, zIndex: 2},
  gap: {marginVertical: spacing.tiny},
  row: {flexDirection: 'row', alignItems: 'center'},
  title: {fontSize: fontSize.large, fontWeight: fontWeight.bold},
  logo: {width: 60, height: 60, marginRight: spacing.medium},
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
    backgroundColor: Colors.border,
  },
});

export default Shop;
