import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, fontSize, fontWeight, spacing} from 'config/Theme';
import {opacityColor} from 'utils/items';
import {Labels, WeekDays} from 'constants/labels';

const TimeTable = () => {
  return (
    <View>
      <View style={timeStyle.row}>
        <Text>{WeekDays.Monday}</Text>
        <Text style={timeStyle.time}>7:30 - 20:00</Text>
      </View>
      <View style={timeStyle.row}>
        <Text>{WeekDays.Tuesday}</Text>
        <Text style={timeStyle.time}>7:30 - 20:00</Text>
      </View>
      <View style={timeStyle.row}>
        <Text>{WeekDays.Wednesday}</Text>
        <Text style={timeStyle.time}>7:30 - 20:00</Text>
      </View>
      <View style={timeStyle.row}>
        <Text>{WeekDays.Thursday}</Text>
        <Text style={timeStyle.time}>7:30 - 20:00</Text>
      </View>
      <View style={timeStyle.row}>
        <Text>{WeekDays.Saturday}</Text>
        <Text style={timeStyle.time}>7:30 - 20:00</Text>
      </View>
      <View style={timeStyle.row}>
        <Text>{WeekDays.Sunday}</Text>
        <Text style={timeStyle.time}>7:30 - 20:00</Text>
      </View>
    </View>
  );
};

const Details = () => {
  return (
    <View>
      <View style={styles.about}>
        <Text style={styles.title}>{Labels['About Us']}</Text>
        <Text style={styles.info}>
          Don’t think of this section as an obligation and only write a few
          paragraphs here and there.
        </Text>
      </View>
      <View style={styles.about}>
        <Text style={styles.title}>{Labels['Time Table']}</Text>
      </View>
      <TimeTable />
      <View style={styles.about}>
        <Text style={styles.title}>{Labels.Contacts}</Text>
        <View style={styles.row}>
          <Text>(+976) 99575023</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.title}>{Labels.Call}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  about: {padding: spacing.medium},
  title: {fontSize: fontSize.large, fontWeight: fontWeight.bold},
  info: {marginTop: spacing.medium},
  row: {
    flexDirection: 'row',
    marginTop: spacing.medium,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: 1,
    paddingVertical: spacing.tiny,
    paddingHorizontal: spacing.medium,
    borderRadius: 4,
    borderColor: opacityColor(Colors.border, 0.8),
  },
});

const timeStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing.medium,
    borderColor: opacityColor(Colors.border, 0.4),
    borderBottomWidth: 1,
  },
  time: {fontWeight: fontWeight.bold},
});

export default Details;
