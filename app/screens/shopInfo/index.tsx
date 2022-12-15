import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {HomeStackList} from 'app/screens';
import {PhotoSwiper, Header} from 'app/components';
import Tabs from './scenes';

interface IShopInfoProps {
  route: RouteProp<HomeStackList, 'Shop'>;
}

const ShopInfo = (props: IShopInfoProps) => {
  const {title} = props.route.params;

  return (
    <View style={styles.main}>
      <Header title={title} />
      <View style={styles.main}>
        <PhotoSwiper key={'photo'} style={styles.swipe} />
        <Tabs key={'tabs'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
  swipe: {position: 'absolute', top: 0},
});

export default ShopInfo;
