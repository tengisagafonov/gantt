import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Header from 'app/components/header';
import Offers from './component/offers';
import Services from './component/services';

const Home = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Header title={'Home'} />
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <Services />
        <Offers item={{title: 'Our Best Services'}} />
        <Offers item={{title: 'Next Thing on Your Mind'}} />
        <Offers item={{title: 'Offers'}} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {alignSelf: 'center', flex: 1, width: '100%'},
});

export default Home;
