import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Colors, fontSize, fontWeight, spacing} from 'config/Theme';
import {opacityColor, priceSeparator, capitalizeFirstLetter} from 'utils/items';
import {StatusColor} from 'constants/booking';
import {Status} from 'app/types';
import {Labels} from 'constants/labels';
import {Rating} from 'assets/icons';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {BookingItemType} from 'app/types';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {BookingStackList} from 'app/screens';

interface IBookingItemProps {
  item: BookingItemType;
}

const BookingItem = (props: IBookingItemProps) => {
  const {item} = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<BookingStackList>>();
  return (
    <TouchableOpacity
      style={styles.general}
      onPress={() =>
        navigation.navigate('BookingInfo', {
          title: '#5234587',
          status: item.status,
        })
      }>
      <View style={styles.main}>
        <View>
          <Text style={styles.code}>#5234587</Text>
          <Text style={styles.shop}>Home Cleaner</Text>
          <Text style={styles.date}>22 Sep 21, 03:00 - 04:30 </Text>
        </View>
        <View style={styles.left}>
          <View style={status(item.status)}>
            <Text style={statusText(item.status)}>
              {capitalizeFirstLetter(item.status)}
            </Text>
          </View>
          <Text style={styles.shop}>{priceSeparator(45000)}</Text>
        </View>
      </View>
      <View style={styles.worker}>
        <View>
          <Text style={styles.shop}>Levi Ray</Text>
          <View style={styles.row}>
            <Rating color={Colors.yellow} style={styles.icon} />
            <Text>4.7</Text>
            <Text> (50+)</Text>
          </View>
        </View>
        <FastImage source={{uri: ''}} style={styles.img} />
      </View>
      {item.status !== Status.cancelled &&
        item.status !== Status.ongoing &&
        item.status !== Status.completed && (
          <TouchableOpacity style={styles.cancel}>
            <Text style={styles.cancelText}>{Labels['Cancel booking']} </Text>
          </TouchableOpacity>
        )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  general: {
    margin: spacing.medium,
    borderWidth: 3,
    borderColor: Colors.buttonInactive,
    borderRadius: 5,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing.medium,
  },
  left: {justifyContent: 'space-between', alignItems: 'flex-end'},
  code: {color: Colors.buttonActiveBlue, fontWeight: fontWeight.bold},
  shop: {
    marginVertical: spacing.tiny,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.large,
  },
  date: {fontWeight: fontWeight.bold, color: Colors.border},

  cancel: {
    width: '95%',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: spacing.medium,
    padding: spacing.medium,
    borderColor: Colors.red,
  },
  cancelText: {
    color: Colors.red,
    fontWeight: fontWeight.thick,
    fontSize: fontSize.large,
  },

  worker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.medium,
    borderTopWidth: 3,
    borderColor: Colors.buttonInactive,
  },
  icon: {transform: [{scale: 0.7}]},
  row: {flexDirection: 'row', alignItems: 'center'},
  img: {borderWidth: 1, height: 40, width: 40, borderRadius: 20},
});

const status = (currentStatus: Status) =>
  ({
    backgroundColor: opacityColor(StatusColor[currentStatus], 0.1),
    padding: spacing.tiny,
    borderRadius: 4,
  } as ViewStyle);

const statusText = (currentStatus: Status) =>
  ({
    color: StatusColor[currentStatus],
    fontWeight: fontWeight.bold,
  } as TextStyle);

export default BookingItem;
