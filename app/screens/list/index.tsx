import React, {useCallback} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Header from 'app/components/header';
import Shop from './shop';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {HomeStackList} from 'app/screens';

const data = [
  {id: '1', name: 'Mega', isCertified: false},
  {id: '2', name: 'Matrix', isCertified: true},
  {id: '3', name: 'Google', isCertified: false},
  {id: '4', name: 'Sansar', isCertified: false},
  {id: '5', name: 'E-Mart', isCertified: false},
  {id: '6', name: 'P-Mart', isCertified: false},
  {id: '7', name: 'Shangrila', isCertified: false},
];

interface IOffersListProps {
  route: RouteProp<HomeStackList, 'List'>;
}

const OffersList = (props: IOffersListProps) => {
  const {route} = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackList, 'Shop'>>();

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
