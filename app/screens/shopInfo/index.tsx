import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
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
      <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}>
        <PhotoSwiper key={'photo'} />
        <Tabs key={'tabs'} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
});

export default ShopInfo;
