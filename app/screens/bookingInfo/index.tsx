import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Header from 'app/components/header';
import {RouteProp} from '@react-navigation/native';
import {capitalizeFirstLetter, opacityColor, priceSeparator} from 'utils/items';
import {Colors, fontSize, fontWeight, spacing} from 'config/Theme';
import {LocationIcon} from 'assets/icons';
import {Status} from 'app/types';
import {StatusColor} from 'constants/booking';

const orderProfile = {
  service: {title: 'haircut', price: '50000'},
  name: 'Peter Davidson',
};

const BookingInfo = ({
  route,
}: {
  route: RouteProp<{params: {title: string}}, 'params'>;
}) => {
  const {title} = route.params;

  return (
    <View style={styles.main}>
      <Header title={title} phone={'99575023'} />
      <ScrollView>
        <View style={styles.profile}>
          <View style={styles.services}>
            <Text style={styles.title}>
              {capitalizeFirstLetter(orderProfile.service.title)}
            </Text>
            <Text style={styles.price}>
              {priceSeparator(orderProfile.service.price)}
            </Text>
          </View>
          <View style={styles.info}>
            <View>
              <Text style={styles.code}>{title}</Text>
              <Text style={styles.name}>{orderProfile.name}</Text>
              <Text>
                <LocationIcon />
              </Text>
            </View>
            <View style={status(Status.accepted)}>
              <Text style={statusText(Status.accepted)}>
                {capitalizeFirstLetter(Status.accepted)}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
  profile: {
    backgroundColor: Colors.white,
    margin: spacing.smaller,
    padding: spacing.medium,
  },
  services: {flexDirection: 'row', justifyContent: 'space-between'},
  title: {fontWeight: fontWeight.bold, fontSize: fontSize.large},
  price: {
    color: Colors.greenDark,
    fontSize: fontSize.large,
    fontWeight: fontWeight.bold,
  },
  name: {
    marginVertical: spacing.tiny,
    fontSize: fontSize.large,
    fontWeight: fontWeight.bold,
  },
  code: {
    color: Colors.buttonActiveBlue,
    fontWeight: fontWeight.bold,
  },
  info: {
    marginTop: spacing.medium,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.buttonInactive,
    padding: spacing.medium,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    justifyContent: 'space-between',
  },
});

const status = (currentStatus: Status) =>
  ({
    backgroundColor: opacityColor(StatusColor[currentStatus], 0.1),
    padding: spacing.smaller,
    borderRadius: 4,
  } as ViewStyle);

const statusText = (currentStatus: Status) =>
  ({
    color: StatusColor[currentStatus],
    fontWeight: fontWeight.bold,
  } as TextStyle);

export default BookingInfo;
