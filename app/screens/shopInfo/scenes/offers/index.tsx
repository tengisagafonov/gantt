import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {opacityColor, priceSeparator} from 'utils/items';
import {Colors, fontWeight, spacing} from 'config/Theme';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {HomeStackList} from 'app/screens';

const offers = [
  {name: "Man's regular haircut"},
  {name: "Man's regular haircut"},
  {name: 'Wtf'},
];

const Offers: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackList, 'Shop'>>();

  return (
    <View>
      {offers.map((i, idx) => (
        <View key={idx} style={styles.item}>
          <Text style={styles.title}>{i.name}</Text>
          <View style={styles.row}>
            <View style={styles.info}>
              <Text style={styles.title}>{priceSeparator(35000)}</Text>
              <Text>15 min</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('BookTime')}
              style={styles.book}>
              <Text style={styles.text}>Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {flexDirection: 'row'},
  info: {alignItems: 'flex-end', marginRight: spacing.medium},
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: opacityColor(Colors.border, 0.2),
    justifyContent: 'space-between',
    padding: spacing.medium,
    marginTop: spacing.medium,
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
