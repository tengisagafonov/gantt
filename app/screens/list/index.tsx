import React, {useCallback} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Header from 'app/components/header';
import Shop from './shop';
import {useNavigation} from '@react-navigation/native';

const data = [
  {id: '1', name: 'Mega', isCertified: false},
  {id: '2', name: 'Matrix', isCertified: true},
  {id: '3', name: 'Google', isCertified: false},
  {id: '4', name: 'Sansar', isCertified: false},
  {id: '5', name: 'E-Mart', isCertified: false},
  {id: '6', name: 'P-Mart', isCertified: false},
  {id: '7', name: 'Shangrila', isCertified: false},
];

const OffersList = ({route}: {route: any}) => {
  const navigation = useNavigation<any>();

  const renderItem = useCallback(
    ({item}: {item: any}) => <Shop item={item} navigation={navigation} />,
    [navigation],
  );

  return (
    <View style={styles.main}>
      <Header title={route.params.title} />
      <FlatList style={styles.list} data={data} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
  list: {},
});

export default OffersList;
