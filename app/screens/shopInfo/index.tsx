import React from 'react';
import {View} from 'react-native';
import Header from 'app/components/header';

const ShopInfo = ({route}: {route: any}) => {
  return (
    <View>
      <Header title={route.params.title} />
    </View>
  );
};

export default ShopInfo;
