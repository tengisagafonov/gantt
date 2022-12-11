import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {HomeStackList} from 'app/screens';
import {PhotoSwiper, Header} from 'app/components';

interface IShopInfoProps {
  route: RouteProp<HomeStackList, 'Shop'>;
}

const ShopInfo = (props: IShopInfoProps) => {
  const {title} = props.route.params;

  return (
    <View style={styles.main}>
      <Header title={title} />
      <ScrollView>
        <PhotoSwiper />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
});

export default ShopInfo;
