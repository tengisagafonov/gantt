import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Header from 'app/components/header';
import Shop from 'app/screens/list/Shop';

const data = [
  {id: '1', isCertified: false},
  {id: '2', isCertified: true},
  {id: '3', isCertified: false},
  {id: '4', isCertified: false},
  {id: '5', isCertified: false},
  {id: '6', isCertified: false},
  {id: '7', isCertified: false},
];

const OffersList = ({route}: {route: any}) => {
  return (
    <View style={styles.main}>
      <Header title={route.params.title} />
      <FlatList style={styles.list} data={data} renderItem={Shop} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
  list: {},
});

export default OffersList;
