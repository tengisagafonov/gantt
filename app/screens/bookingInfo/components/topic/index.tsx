import {Text, TouchableOpacity, View} from 'react-native';
import {capitalizeFirstLetter, priceSeparator} from 'utils/items';
import {LocationIcon} from 'assets/icons';
import {Colors} from 'config/Theme';
import {Status} from 'app/types';
import {GeneralInfo, Labels} from 'constants/labels';
import React from 'react';
import {styles, statusText, status} from './styles';

const Topic = ({
  orderProfile,
  bookingStatus,
}: {
  orderProfile: any;
  bookingStatus: Status;
}) => {
  return (
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
          <Text style={styles.code}>{orderProfile.code}</Text>
          <Text style={styles.name}>{orderProfile.name}</Text>
          <TouchableOpacity style={styles.location}>
            <LocationIcon style={styles.icon} color={Colors.buttonActiveBlue} />
            <Text style={styles.code}>{orderProfile.location}</Text>
          </TouchableOpacity>
        </View>
        <View style={status(bookingStatus)}>
          <Text style={statusText(bookingStatus)}>
            {capitalizeFirstLetter(bookingStatus)}
          </Text>
        </View>
      </View>
      {bookingStatus !== Status.cancelled &&
        bookingStatus !== Status.completed &&
        bookingStatus !== Status.ongoing && (
          <View style={styles.cancellation}>
            <Text style={styles.name}>{Labels['Cancellation Policy']}</Text>
            <Text style={styles.cancellationText}>
              {GeneralInfo['Cancellation Policy']}
            </Text>
          </View>
        )}
    </View>
  );
};

export default Topic;
