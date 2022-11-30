import React from 'react';
import {View} from 'react-native';
import Header from 'app/components/header';
import {RouteProp} from '@react-navigation/native';
import {HomeStackList} from 'app/screens';

interface IShopInfoProps {
  route: RouteProp<HomeStackList, 'Shop'>;
}

const ShopInfo = (props: IShopInfoProps) => {
  const {title} = props.route.params;

  return (
    <View>
      <Header title={title} />
    </View>
  );
};

export default ShopInfo;
