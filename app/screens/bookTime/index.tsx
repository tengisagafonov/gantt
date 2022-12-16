import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Header} from 'app/components';
import DatePicker from 'react-native-modern-datepicker';
import {Colors, fontSize} from 'config/Theme';
import {opacityColor} from 'utils/items';
import PersonList from './components/persons';
import TimeList from './components/timelist';
import Confirm from './components/confirm';

const BookTime = () => {
  return (
    <View style={styles.main}>
      <Header title={'Book'} />
      <ScrollView>
        <PersonList />
        <DatePicker style={styles.date} />
        <TimeList />
      </ScrollView>
      <Confirm />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: Colors.white},
  workers: {flexDirection: 'row'},
  pickWorker: {
    borderLeftWidth: 1,
    borderColor: opacityColor(Colors.border, 0.6),
  },
  name: {fontSize: fontSize.smaller, width: 50, textAlign: 'center'},
  date: {borderTopWidth: 1, borderColor: opacityColor(Colors.border, 0.6)},
});

export default BookTime;
