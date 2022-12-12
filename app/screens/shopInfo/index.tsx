import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {HomeStackList} from 'app/screens';
import {PhotoSwiper, Header} from 'app/components';
import {TabView} from 'react-native-tab-view';

interface IShopInfoProps {
  route: RouteProp<HomeStackList, 'Shop'>;
}

const ShopInfo = (props: IShopInfoProps) => {
  const {title} = props.route.params;
  const [index, setIndex] = React.useState(0);

  const renderScene = ({route}: any) => {
    switch (route.key) {
      case 'funds':
        return <View />;
      case 'all':
        return <View />;
      case 'favorites':
        return <View />;
      default:
        return null;
    }
  };

  const [routes] = React.useState([
    {key: 'funds', title: 'offers'},
    {key: 'all', title: 'review'},
    {key: 'favorites', title: 'portfolio'},
  ]);

  return (
    <View style={styles.main}>
      <Header title={title} />
      <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}>
        <PhotoSwiper key={'photo'} />
        <TabView
          key={'tabs'}
          onIndexChange={idx => setIndex(idx)}
          navigationState={{index, routes}}
          renderScene={renderScene}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1},
});

export default ShopInfo;
